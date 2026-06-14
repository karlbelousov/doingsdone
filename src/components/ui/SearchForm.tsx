export default function SearchForm() {
  return (
    <form
      className="search-form"
      action="index.php"
      method="post"
      autoComplete="off"
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Поиск по задачам"
      />
      <button className="search-form__submit" type="submit">
        Искать
      </button>
    </form>
  );
}
