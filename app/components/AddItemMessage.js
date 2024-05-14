const AddItemMessage = ({ message }) => {
  return (
    <div className="fixed top-0 right-0 mt-16 mr-4 p-2 bg-green-500 text-white shadow rounded">
      <p>{message}</p>

      <div className="progress-bar"></div>
    </div>
  );
};

export default AddItemMessage;
