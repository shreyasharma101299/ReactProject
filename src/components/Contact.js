const Contact = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-4"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-4"
        />
        <button className="border border-black bg-slate-200 p-2 m-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
