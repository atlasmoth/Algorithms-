const fetch = require("isomorphic-unfetch");

function data() {
  const getPost = async (num) => {
    const url = `https://jsonplaceholder.typicode.com/todos/`;
    try {
      const post = fetch(`${url}${num}`).then((res) => res.json());
      return post;
    } catch (error) {
      return error;
    }
  };

  return {
    [Symbol.asyncIterator]: function getter() {
      let counter = 1;
      return {
        next: async () => {
          counter++;
          const response = await getPost(counter);
          if (!response.id || !response.id) {
            return {
              value: "Sorry this is the end of your stream",
              done: true,
            };
          }
          return { value: response, done: false };
        },
      };
    },
  };
}

// (async () => {
//   for await (const stuff of data()) {
//     console.log(stuff);
//   }
// })();
