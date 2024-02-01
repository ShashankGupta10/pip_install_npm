"use client";
import { useContext, useState } from "react";
import { FilterContext } from "./page.jsx";

const Filters = () => {
  const [handleFilter, setFilterActive, formData, setFormData] =
    useContext(FilterContext);

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: !formData[e.target.name],
    }));
  };

  return (
    <div className="fixed w-full h-screen top-0 right-0 bg-black opacity-100 z-10">
      <details
        open
        class="relative opacity-100 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-10 max-w-md w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700"
      >
        <summary class="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
          <span class="text-sm font-medium"> Toggle Filters </span>

          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>
        <form onSubmit={handleFilter}>
          <div class="flex border-t border-gray-200 lg:border-t-0">
            <fieldset class="w-full">
              <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                Type
              </legend>

              <div class="space-y-2 px-5 py-6">
                <div class="flex items-center">
                  <input
                    id="New"
                    type="checkbox"
                    name="environmental"
                    onChange={handleChange}
                    class="h-5 w-5 rounded border-gray-300"
                    checked={formData.environmental}
                  />

                  <label for="New" class="ml-3 text-sm font-medium">
                    Environmental
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="Used"
                    type="checkbox"
                    name="ethical"
                    onChange={handleChange}
                    class="h-5 w-5 rounded border-gray-300"
                    checked={formData.ethical}
                  />

                  <label for="Used" class="ml-3 text-sm font-medium">
                    Ethical
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="Branded"
                    type="checkbox"
                    name="philanthropic"
                    onChange={handleChange}
                    class="h-5 w-5 rounded border-gray-300"
                    checked={formData.philanthropic}
                  />

                  <label for="Branded" class="ml-3 text-sm font-medium">
                    Philanthropic
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="Branded"
                    type="checkbox"
                    name="financial"
                    onChange={handleChange}
                    class="h-5 w-5 rounded border-gray-300"
                    checked={formData.financial}
                  />

                  <label for="Branded" class="ml-3 text-sm font-medium">
                    Financial
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="w-full">
              <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                Sort by
              </legend>

              <div class="space-y-2 px-5 py-6">
                <div class="flex items-center">
                  <input
                    id="300+"
                    type="radio"
                    name="Price"
                    value="300+"
                    class="h-5 w-5 rounded border-gray-300"
                  />

                  <label for="300+" class="ml-3 text-sm font-medium">
                    Distance
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="">
            <div class="flex justify-between border-t border-gray-200 px-5 py-3">
              <button
                name="reset"
                type="button"
                class="rounded text-xs font-medium text-gray-600 underline"
              >
                Reset All
              </button>

              <button
                name="commit"
                type="submit"
                class="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </form>
      </details>
    </div>
  );
};

export default Filters;
