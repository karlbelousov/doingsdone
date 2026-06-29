"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  function handleInputChange(term: string) {
    setSearchQuery(term.trim());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    if (searchQuery.length > 0) {
      params.set("search", searchQuery);
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("search");
    }
  }

  return (
    <form
      className="search-form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Поиск по задачам"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        value={searchQuery}
      />
      <button className="search-form__submit" type="submit">
        Искать
      </button>
    </form>
  );
}
