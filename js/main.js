window.onscroll = function() {
    const header = document.getElementById("header");
    const cab_topo = document.getElementById("cab_topo");
    const logo_cab = document.getElementById("logo_cab");
    const foto_cab = document.getElementById("foto_cab");
    const contatos_cab = document.getElementById("contatos_cab");
    const menu_cabecalho = document.getElementById("menu_cabecalho");
    const imagem_logo = document.getElementById("imagem_logo");
    const foto_cabecalho = document.getElementById("foto_cabecalho");
    const nome_cabecalho = document.getElementById("nome_cabecalho");
    const link_contato_logo = document.getElementById("link_contato_logo");
    const contatos_cabecalho =document.getElementById("contatos_cabecalho");
    const logo_link = document.getElementById("logo_link");

    const email_link = document.getElementById("email_link");
    const telefone_link = document.getElementById("telefone_link");
    const linkedin_link = document.getElementById("linkedin_link");
    const instagram_link = document.getElementById("instagram_link");

    if (document.documentElement.scrollTop > 50) {
        header.classList.remove("passagem");
        header.classList.add("menor");

        cab_topo.classList.remove("cab_topo");
        cab_topo.classList.add("cab_topo_menor");

        logo_cab.classList.remove("logo_cab");
        logo_cab.classList.add("logo_cab_menor");

        foto_cab.classList.remove("foto_cab");
        foto_cab.classList.add("foto_cab_menor");

        contatos_cab.classList.remove("contatos_cab");
        contatos_cab.classList.add("contatos_cab_menor");

        menu_cabecalho.classList.remove("menu_cabecalho");
        menu_cabecalho.classList.add("menu_cabecalho_menor");

        imagem_logo.setAttribute("src", "img/cabecalho/FraseDaLogo.png");
        
        foto_cabecalho.setAttribute("src", "");
        foto_cabecalho.setAttribute("alt", "");

        nome_cabecalho.setAttribute("src", "");
        nome_cabecalho.setAttribute("alt", "");

        contatos_cabecalho.classList.remove("contatos_cabecalho");
        contatos_cabecalho.classList.add("contatos_cabecalho_menor");

        email_link.classList.remove("text_link");
        email_link.classList.add("text_link_menor");

        telefone_link.classList.remove("text_link");
        telefone_link.classList.add("text_link_menor");

        linkedin_link.classList.remove("text_link");
        linkedin_link.classList.add("text_link_menor");

        instagram_link.classList.remove("text_link");
        instagram_link.classList.add("text_link_menor");

        email_link.innerHTML = "";
        telefone_link.innerHTML = "";
        linkedin_link.innerHTML = "";
        instagram_link.innerHTML = "";
    } else {
        header.classList.remove("menor");

        cab_topo.classList.remove("cab_topo_menor");
        cab_topo.classList.add("cab_topo");

        logo_cab.classList.remove("logo_cab_menor");
        logo_cab.classList.add("logo_cab");

        foto_cab.classList.remove("foto_cab_menor");
        foto_cab.classList.add("foto_cab");

        contatos_cab.classList.remove("contatos_cab_menor");
        contatos_cab.classList.add("contatos_cab");

        menu_cabecalho.classList.remove("menu_cabecalho_menor");
        menu_cabecalho.classList.add("menu_cabecalho");

        imagem_logo.setAttribute("src", "img/cabecalho/LogoQuadrado.png")

        foto_cabecalho.setAttribute("src", "/img/cabecalho/Foto.png");
        foto_cabecalho.setAttribute("alt", "foto_cabecalho");

        nome_cabecalho.setAttribute("src", "/img/cabecalho/Nome.png");
        nome_cabecalho.setAttribute("alt", "nome_cabecalho");

        contatos_cabecalho.classList.remove("contatos_cabecalho_menor");
        contatos_cabecalho.classList.add("contatos_cabecalho");

        email_link.classList.remove("text_link_menor");
        email_link.classList.add("text_link");

        telefone_link.classList.remove("text_link_menor");
        telefone_link.classList.add("text_link");

        linkedin_link.classList.remove("text_link_menor");
        linkedin_link.classList.add("text_link");

        instagram_link.classList.remove("text_link_menor");
        instagram_link.classList.add("text_link");

        email_link.innerHTML = '<p class="fechamento_teg_link">&lt;</p><p class="tag_link">/gadyelsilva093@gmail.com</p><p class="fechamento_teg_link">&gt;</p>';
        telefone_link.innerHTML = '<p class="fechamento_teg_link">&lt;</p><p class="tag_link">/(17) 99757-5690</p><p class="fechamento_teg_link">&gt;</p>';
        linkedin_link.innerHTML = '<p class="fechamento_teg_link">&lt;</p><p class="tag_link">/linkedin.com</p><p class="fechamento_teg_link">&gt;</p>';
        instagram_link.innerHTML = '<p class="fechamento_teg_link">&lt;</p><p class="tag_link">/@gadyelbertini</p><p class="fechamento_teg_link">&gt;</p>';
    }

};

function da(pos) {
    document.documentElement.scrollTop = document.body.scrollTop = pos;
};