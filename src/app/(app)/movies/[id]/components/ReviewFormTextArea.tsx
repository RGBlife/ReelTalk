"use client";
import { useFormStatus } from "react-dom";

export default function ReviewFormTextArea() {
  const { pending } = useFormStatus();

  return (
    <div className="overflow-hidden rounded-lg border border-gray-600 bg-gray-800 shadow-sm focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
      <label htmlFor="title" className="sr-only">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-full border-0 bg-gray-800 pt-2.5 text-lg font-medium placeholder:text-gray-500 focus:ring-0"
        placeholder="Give your review a title..."
        required
      />
      <label htmlFor="description" className="sr-only">
        Description
      </label>
      <textarea
        rows={2}
        name="body"
        id="body"
        className="block w-full resize-none border-0 bg-gray-800 py-0 text-gray-400 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Write your review here..."
        defaultValue={""}
        required
      />

      {/* Spacer element to match the height of the toolbar */}
      <div aria-hidden="true">
        <div className="py-2">
          <div className="h-9" />
        </div>
        <div className="h-px" />
        <div className="py-2">
          <div className="py-px">
            <div className="h-9" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-3 border-t border-gray-700 px-2 py-2 sm:px-3">
        <div className="flex-shrink-0">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {pending ? "Posting review..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
