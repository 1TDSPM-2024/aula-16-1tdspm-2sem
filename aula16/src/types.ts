export type TipoProduto = {
    push(novoProduto: TipoProduto): unknown;

    id:number;
    nome:string;
    qtd:number;
}
