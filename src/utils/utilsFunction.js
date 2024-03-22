export const validMailId = (mail) => {
  let index_of = mail.indexOf("@");
  let updatedMailId = mail.slice(0, index_of);
  //   console.log(index_of);
  //   console.log(updatedMailId)
  return updatedMailId;
};
