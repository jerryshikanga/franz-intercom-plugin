module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    var msgCount = document.querySelector(".submenu__sections__section__items__item__count").textContent.trim() 
    Franz.setBadge(msgCount);
  }

  Franz.loop(getMessages);
}
