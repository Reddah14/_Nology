const companies = [
  {
    name: "Company One",
    industry: "Finance",
    start: 1981,
    end: 2004,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Two",
    industry: "Retail",
    start: 1992,
    end: 2008,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Three",
    industry: "Auto",
    start: 1999,
    end: 2007,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Four",
    industry: "Retail",
    start: 1989,
    end: 2010,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Five",
    industry: "Technology",
    start: 2009,
    end: 2014,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Six",
    industry: "Finance",
    start: 1987,
    end: 2010,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Seven",
    industry: "Auto",
    start: 1986,
    end: 1996,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Eight",
    industry: "Technology",
    start: 2011,
    end: 2016,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  },
  {
    name: "Company Nine",
    industry: "Retail",
    start: 1981,
    end: 1989,
    address: {
      line1: "privtt Drive",
      line2: "Little Whinging",
      Town: "Surrey",
      Postcode: "SU12 34F"
    }
  }
];

const companiesCopy = companies.map((company) => {
  const shallowCopy = { ...company };
  shallowCopy.address = { ...company.address };
  return shallowCopy;
});

companiesCopy[0].address.line1 = "24";

console.log(companies);
console.log(companiesCopy);