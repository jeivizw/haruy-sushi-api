let categorias = [
    {id: 1, nome: "Combinados"},
    {id: 2, nome: "Entradas"},
    {id: 3, nome: "Bebidas"},
];

let produtos = [
    { 
        categoriaId: 1,
        nome: "Combinado Haruy Especial (30 Peças)",
        preco: 89.90,
        descrição: "Delicioso combinado com sashimis, niguiris e uramakis de salmão fresco, acompanhado de wasabi e gengibre.",
        imagem: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80"
    },
    { 
        categoriaId: 2,
        nome: "Porção de Hot Roll",
        preco: 35.00,
        descrição: "10 deliciosas unidades de sushi empanado e frito, recheadas com salmão e cream cheese, cobertas com molho tarê.",
        imagem: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=800&q=80"
    },
    { 
        categoriaId: 3,
        nome: "Refrigerante 350ml",
        preco: 7.50,
        descrição: "Refrigerante em lata de 350ml, escolha entre Coca-Cola, Guaraná ou Sprite.",
        imagem: "https://horasagradamc.meucatalogofacil.com/_core/_uploads/14/2020/11/111328112016gk25fh0h.jpeg"
    }
];

module.exports = { categorias, produtos };