const result = document.querySelector(".result");

const fetchData = async () => {
 try {
  const response = await axios.get(
   "https://serverless-functions-tutorial.netlify.app/api/2-basic-api"
  );
  const products = response.data;

  const productsNames = response.data
   .map((product) => {
    const { name } = product;
    return `<p>${name}</p>`;
   })
   .join("");
  result.innerHTML = productsNames;
 } catch (error) {
  console.log(error);
 }
};

fetchData();
