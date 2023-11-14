"use client";

import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { createClassName } from "~/utils/string-formatters";

export default function ReviewSpoilerToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      name="has_spoilers"
      checked={enabled}
      onChange={setEnabled}
      value={enabled ? "yes" : "no"}
      className={createClassName(
        enabled ? "bg-indigo-600 " : "bg-gray-400 ",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={createClassName(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
        )}
      />
    </Switch>
  );
}
