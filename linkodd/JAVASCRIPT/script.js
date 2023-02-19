function barClick() {
    document.querySelector(".bar-box").style.display="flex";
}

function closeClick() {
    document.querySelector(".bar-box").style.display="none";
}

function instagramClick() {
    window.location.href = "https://www.instagram.com/the_fatih_krc_42/?igshid=TmMyMTA2M2Y";
}

function youtubeClick() {
    window.location.href = "https://www.youtube.com/@ecdadimizinYolundan";
}

/*.*/

function sendBtn() {
    var inputVal = document.getElementById("myInput").value;
    if (inputVal === "000") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://krc0.github.io/byfatihkrc/";
          }, 1000);
    }

    if (inputVal === "28") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://my.telegram.org/auth";
          }, 1000);
    }

    if (inputVal === "74") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://belgelerlegercektarih.com/2022/08/30/kim-yunan-dostu-kadir-misiroglu-mu-yoksa-m-kemal-mi/";
          }, 1000);
    }

    if (inputVal === "3") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://www.canlitvizle.kim/";
          }, 1000);
    }

    if (inputVal === "1") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://open.spotify.com/playlist/5CdmQ5fEMUP67U1zcULsib?si=2a70c61ab0b54d71";
          }, 1000);
    }

    if (inputVal === "5") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://youtu.be/p7yN5vm0rK8";
          }, 1000);
    }

    if (inputVal === "12") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://www.youtube.com/channel/UC_hYMjvx1w2sfa8xC408PqQ?app=desktop";
          }, 1000);
    }

    if (inputVal === "13") {
        document .querySelector(".c1-screen").style.display="none";
        document.querySelector(".load").style.visibility="visible";
        setTimeout(function() {
            window.location.href = "https://www.instagram.com/sansursuztarih/";
          }, 1000);
    }

    else{
        document .querySelector(".c1-screen").innerHTML="Maleseft " + '"' + inputVal + '"' + " adlı değer şuan geçerli değil !"
    }
  }

  