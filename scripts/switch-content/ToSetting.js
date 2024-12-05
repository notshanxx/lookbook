// SETTINGS

const settingContainer = document.getElementById("setting-container");
const settingButton = document.getElementById("setting")
const closeSettingButton = document.getElementById("close-setting")

// close
closeSettingButton.addEventListener('click', ()=>{
    // settingContainer.style.display = "none"
    settingContainer.classList.remove("setting-open")
    console.log('Settings close')
})
// open
settingButton.addEventListener('click', ()=>{
    // settingContainer.style.display = "block"
    console.log('Settings')
    settingContainer.classList.add("setting-open")
 
})