const fetch = require("isomorphic-unfetch");

function main() {
  let counter = 1;
  const url = `https://jsonplaceholder.typicode.com/todos/`;
  const getPost = async () =>
    await fetch(`${url}${counter}`).then((res) => res.json());

  return {
    [Symbol.asyncIterator]: async function* getter() {
      while (true) {
        counter++;
        const post = await getPost();
        if (!post.id || !post.title) {
          return "This is the end amigo";
        }
        yield post;
      }
    },
  };
}

(async () => {
  console.log(await main()[Symbol.asyncIterator]().next());
  console.log(await main()[Symbol.asyncIterator]().next());
  console.log(await main()[Symbol.asyncIterator]().next());
})();
