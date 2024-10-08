import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from "@/types";

export async function GET() {
    // chamada para o arquivo base.json
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" , "utf-8");

    //PARSEAR O ARQUIVO
    const produtos = JSON.parse(file);

    return NextResponse.json(produtos);
}

export async function POST(request:Request) {
    // chamada para o arquivo base.json
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" , "utf-8");

    //PARSEAR O ARQUIVO
    const produtos: TipoProduto[] = JSON.parse(file);

    // pegando os dados envidos para a gravação
    const { id, nome, qtd } = await request.json();

    const novoProduto: TipoProduto = {
        id: id,
        nome: nome,
        qtd: qtd
    };

    novoProduto.id = produtos[ produtos.length - 1 ].id + 1;

    // adicionando o produto na lista que recuperei do arquivo
    produtos.push(novoProduto);

    // transformando a lista em string
    const fileJson = JSON.stringify(produtos);

    // escrevendo no arquivo
    await fs.writeFile(process.cwd() + "/src/data/base.json" , fileJson);

    return NextResponse.json(novoProduto);
}