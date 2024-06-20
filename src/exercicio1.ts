interface Resultado {
    media: number;
    aprovado: boolean;
}

export function calcularMedia(n1: number, n2:number): Resultado {
   
   const media: number = (n1+n2) / 2

    let aprovado:boolean = true;

   if(media <= 6){
    aprovado = false;
   }
   
    return {
        media: media,
        aprovado: aprovado
    }
}