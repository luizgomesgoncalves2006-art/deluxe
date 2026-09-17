const numeroWhatsApp = "5521994279098";

function pedirProduto(produto) {
    const mensagem = `Olá! Eu gostaria de pedir: ${produto}.`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}