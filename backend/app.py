from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores.faiss import FAISS
from langchain.embeddings.cohere import CohereEmbeddings
from langchain.llms.cohere import Cohere
from PyPDF2 import PdfReader
from langchain.chains import RetrievalQA
import os

app = Flask(__name__)
CORS(app)

def get_data():
    text = ""
    reader = PdfReader("./context.pdf")
    number_of_pages = len(reader.pages)
    for page in range(number_of_pages):
        curr_page = reader.pages[page]
        text += curr_page.extract_text()
    return text

def get_chunks(data):
    text_splitter = CharacterTextSplitter(
        separator=".",
        chunk_size=500,
        length_function=len,
    )
    chunks = text_splitter.split_text(data)
    return chunks

def get_vector_store(chunks):
    embeddings = CohereEmbeddings(cohere_api_key=os.environ["COHERE_API_KEY"])
    vector_store = FAISS.from_texts(
        embedding=embeddings,
        texts=chunks,
    )
    return vector_store


@app.route("/chat", methods=["POST"])
def chat():
    question = request.get_json()["question"]
    print(question)
    data = get_data()
    chunks = get_chunks(data)
    vector_store = get_vector_store(chunks)
    llm = Cohere(cohere_api_key=os.environ["COHERE_API_KEY"])
    chain = RetrievalQA.from_llm(
        retriever=vector_store.as_retriever(),
        llm=llm,
    )
    answer = chain.invoke({"query": question})
    return jsonify({"answer": answer})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
