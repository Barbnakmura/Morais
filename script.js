
const WHATSAPP_NUMBER = "5519989897633";

document.getElementById("year").textContent =
  new Date().getFullYear();

const form = document.getElementById("driverForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  const fields = [
    ["Nome", data.get("nome")],
    ["Telefone", data.get("telefone")],
    ["Cidade/Estado", data.get("cidade")],
    ["Tipo de veículo", data.get("veiculo")],
    ["Ano e modelo", data.get("modelo") || "Não informado"],
    ["Veículo próprio", data.get("proprio")],
    ["Experiência", data.get("experiencia")],
    ["Informações adicionais", data.get("observacoes") || "Nenhuma"]
  ];

  const message = [
    "Olá! Quero me cadastrar como motorista agregado da Morais Transportes.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`)
  ].join("\n");

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  status.textContent =
    "Abrindo o WhatsApp para você revisar e enviar seus dados...";

  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
});
