const findFriend = function (data, name, field) {
  const contact = data.find((contact) => contact.name === name);
  if (!contact) {
    return "Not found";
  }
  const friend = data.find((c) => c.name === contact.friends[0]);
  if (!friend) {
    return "Not found";
  }
  if (!friend[field]) {
    return "Not found";
  }
  return { name: friend.name, [field]: friend[field] };
};

const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"],
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"],
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"],
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"],
  },
];

// findFriend(contacts, "Abbott", "phone") should return { name: "Costello", phone: "767 676 7676" }
// findFriend(contacts, "Buster", "email") should return { name: "Hardy", email: "hardy@hardyharhar.com" }
// findFriend(contacts, "Bob", "phone") should return "Not found"
// findFriend(contacts, "Costello", "birthday") should return "Not found" (but if Costello's first friend, Abbott, did have a birthday field, then it should work and return that their name and birthday information)

console.log(findFriend(contacts, "Abbott", "phone"));
