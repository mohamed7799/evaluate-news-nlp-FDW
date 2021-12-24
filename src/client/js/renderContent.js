const renderContent = (obj) => {
  for (const property in obj) {
    document.querySelector(
      `#${property}`
    ).textContent = `${property} :${obj[property]}`;
  }
};

module.exports = renderContent;
