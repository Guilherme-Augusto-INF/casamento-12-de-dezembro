export const wedding = {
  bride: '[Nome da noiva]', groom: '[Nome do noivo]',
  date: '2026-12-12T00:00:00-03:00', 
  timezone: 'America/Sao_Paulo', socials: [], siteUrl: 'https://casamento-12-de-dezembro.vercel.app', whatsapp: '', formUrl: '', pix: '',
  ceremony: {name: 'Local da cerimônia a definir', address: 'Endereço a confirmar', time: '16:30', maps: ''},
  reception: {name: 'Local da recepção a definir', address: 'Endereço a confirmar', time: '18:00', maps: ''},
  story: [
    {label: 'O primeiro encontro', text: 'Aqui começa a história de vocês. Conte como os caminhos se cruzaram e o que tornou esse encontro especial.'},
    {label: 'Uma vida a dois', text: 'As pequenas alegrias, as viagens e os sonhos que fizeram o amor crescer. Este espaço espera as lembranças reais do casal.'},
    {label: 'O nosso sim', text: 'Um pedido, um abraço e uma nova promessa. Compartilhem aqui como decidiram viver o próximo capítulo juntos.'}
  ],
  schedule: [['16:00','Chegada dos convidados'],['16:30','Cerimônia'],['17:30','Fotos & abraços'],['18:00','Recepção'],['19:00','Jantar'],['21:00','Vamos celebrar!'],['00:00','Encerramento · 13/12']],
  dressCode: 'Esporte fino / Social', dressNote: 'Orientação ilustrativa. As recomendações finais serão confirmadas pelo casal.',
  gifts: [{title:'Lista de presentes',text:'Um carinho para o nosso novo começo.',url:''},{title:'Nossa lua de mel',text:'Memórias que vamos guardar para sempre.',url:''}],
  gallery: [{src:'public/fotos/hero.webp',alt:'Casal de noivos com buquê ao pôr do sol — foto ilustrativa'},{src:'public/fotos/flowers.webp',alt:'Flores delicadas — foto ilustrativa'},{src:'public/fotos/table.webp',alt:'Mesa preparada para celebração — foto ilustrativa'}],
  faq: [
    ['Qual será o traje?', 'A sugestão inicial é esporte fino / social. A orientação final ainda será confirmada.'],
    ['Posso levar acompanhante?', 'O casal ainda confirmará essa informação. Considere apenas os nomes indicados no seu convite.'],
    ['Crianças são permitidas?', 'Essa informação será confirmada pelo casal antes do evento.'],
    ['Há estacionamento?', 'As opções de estacionamento serão informadas quando o local estiver definido.'],
    ['Qual horário devo chegar?', 'O horário ilustrativo de chegada é 16:00. Aguarde a confirmação dos horários finais.'],
    ['Onde será a festa?', 'O local da recepção ainda será informado. Consulte a seção O Grande Dia.'],
    ['Como confirmar presença?', 'Após o casal configurar o contato, preencha seu nome e abra o WhatsApp. A confirmação só será enviada quando você enviar a mensagem lá.']
  ]
};
export function remaining(now = Date.now(), date = wedding.date) {
  const seconds = Math.max(0, Math.floor((new Date(date).getTime()-now)/1000));
  return {ended: seconds === 0, values: [Math.floor(seconds/86400),Math.floor(seconds/3600)%24,Math.floor(seconds/60)%60,seconds%60]};
}
export function rsvpLink(name, companions) {
  if(!/^\d{10,15}$/.test(wedding.whatsapp)) return '';
  const message = `Olá! Sou ${name.trim()} e confirmo minha presença no casamento de ${wedding.groom} e ${wedding.bride} no dia ${new Intl.DateTimeFormat('pt-BR', {timeZone: wedding.timezone}).format(new Date(wedding.date))}. Acompanhantes solicitados: ${companions} (conforme o convite).`;
  return `https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(message)}`;
}
