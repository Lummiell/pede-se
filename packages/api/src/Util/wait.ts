export const wait = (milliseconds: number) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(undefined);
    }, milliseconds);
  });
};
