const selectBox = document.getElementById('selectBox');
const mods = document.getElementsByClassName("mod");
const resourcePacks = document.getElementsByClassName("rp");

selectBox.addEventListener('change', (e) => {
    sort(selectBox.value);
});

function sort(value) {
    if (value === 'Показывать только моды') {
        // Показываем все моды
        for (let i = 0; i < mods.length; i++) {
            mods[i].style.display = 'block';
        }
        // Скрываем все ресурспаки
        for (let i = 0; i < resourcePacks.length; i++) {
            resourcePacks[i].style.display = 'none';
        }
    } else if (value === 'Показывать только ресурспаки') {
        // Скрываем все моды
        for (let i = 0; i < mods.length; i++) {
            mods[i].style.display = 'none';
        }
        // Показываем все ресурспаки
        for (let i = 0; i < resourcePacks.length; i++) {
            resourcePacks[i].style.display = 'block';
        }
    } else {
        // Показываем все моды
        for (let i = 0; i < mods.length; i++) {
            mods[i].style.display = 'block';
        }
        // Показываем все ресурспаки
        for (let i = 0; i < resourcePacks.length; i++) {
            resourcePacks[i].style.display = 'block';
        }
    }
}
