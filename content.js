const premiumLightElement = document.getElementById("premiumLightSpan");
const premiumCiElement = document.getElementById("premiumCiSpan");
const premiumPlusElement = document.getElementById("premiumPlusSpan");

// Her bir elementin içeriğini iki katına çıkarın
function doublePrice(element) {
    if (element) {
        const currentPrice = element.textContent;
        const price = parseFloat(currentPrice.replace(/€/g, "").trim()); // € işaretini kaldırın ve boşlukları temizleyin
        if (!isNaN(price)) {
            const newPrice = price * 2;
            element.textContent = newPrice + "€"; // Yeni fiyatı güncelleyin ve ondalık sayıyı düzeltin
        }
    }
}

doublePrice(premiumLightElement);
doublePrice(premiumCiElement);
doublePrice(premiumPlusElement);