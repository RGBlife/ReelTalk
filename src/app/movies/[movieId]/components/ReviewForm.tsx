"use client";

export const ReviewForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("review submitted");

    // check/use Next 14 server actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea name="title" placeholder="Give your review a title..." />
      </div>
      <div>
        <textarea name="body" placeholder="Write your review here..." />
      </div>
      <div>
        <p>Does this review contain spoilers?</p>
        <label>
          <input type="radio" name="has_spoilers" value="false" /> No
        </label>
        <label>
          <input type="radio" name="has_spoilers" value="true" /> Yes
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};