import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from "@/types";

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" , "utf-8");

    //PARSEAR O ARQUIVO
    const produtos = JSON.parse(file);
    return NextResponse.json(produtos);
}

export async function POST(request:Request) {
    //Chamada para o arquivo base.json
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" , "utf-8");

    //PARSEAR O ARQUIVO QUE É A NOSSA LISTA DE PRODUTOS
    const produtos:TipoProduto[] = JSON.parse(file);

    //Destructuring no request para obter os dados que foram enviados para gravação na lista
    const {id, nome, qtd} = await request.json();

    //Agora montamos um novo objeto com os dados desestruturados e tipamos
    const novoProduto:TipoProduto = {
        id: id,
        nome: nome,
        qtd: qtd
    };

    //Gerando um novo id para o produto
    novoProduto.id = ( produtos[ produtos.length - 1 ].id + 1 )

    //Agora vamos adicionar o novo produto na lista de produtos
    produtos.push(novoProduto);

    //Transfromando a lista em string
    const fileJson = JSON.stringify(produtos)

    //Agora devolvemos a lista de produtos no arquivo JSON sobrepondo os dados antigos
    await fs.writeFile(process.cwd() + "/src/data/base.json" , fileJson);

    return NextResponse.json(novoProduto);
}