function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var letters = "abcdefghijklmnopqrstuvwxyz";
async function inviteAllUsers() {
  for (var i = 0; i < letters.length; i++) {
    await sleep(300);
    $("#channel_actions_toggle").click();
    await sleep(300);
    $("#channel_invite_item").click();
    await sleep(300);
    for (var k = 0; k < letters.length; k++) {
      var word = letters[i] + letters[k];
      await sleep(300);
      $("#channel_invite_filter")
        .val(word)
        .trigger("input");
      $(".channel_invite_member:not(hidden)").each(function(i, obj) {
        foundAny = true;
        this.click();
      });
    }
    await sleep(300);
    $(".invite_go").click();
  }
}

inviteAllUsers();
setInterval(inviteAllUsers, 600 * 1000);
