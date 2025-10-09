# 🌊 Waves & Beauty — Turnê Color Waves

## 🌟 Visão Geral do Projeto

Este projeto é uma **Landing Page de Alta Conversão** desenvolvida para a venda de ingressos da **Turnê Color Waves**, unindo **design premium**, **checkout full-stack seguro** e **experiência fluida**.

O foco é oferecer uma jornada de compra intuitiva e elegante, com um **modal de checkout integrado**, permitindo que o usuário conclua o pagamento sem sair da página.
![Uploading bras-service.png…]()

---

## ✨ Destaques Técnicos

| Recurso                   | Tecnologia / Descrição                                               |
| :------------------------ | :------------------------------------------------------------------- |
| **Arquitetura**           | **Next.js 13+ (App Router)** com **TypeScript**                      |
| **Estilo / UI**           | **Tailwind CSS** com estética moderna, feminina e sofisticada        |
| **Checkout / Pagamentos** | **Stripe** (Checkout completo com Cartão de Crédito e PIX Dinâmico)  |
| **PIX**                   | Geração instantânea de QR Code (base64) com feedback visual no modal |
| **E-mails Automáticos**   | **Resend** para envio de confirmações de compra                      |
| **Performance / SEO**     | Otimizações nativas do Next.js (SSR, Metadata API)                   |
| **Hospedagem**            | **Vercel** (CI/CD e ambiente de produção)                            |

---

## 🎨 Design e Identidade Visual

O design reflete uma estética **sofisticada, feminina e de luxo**, alinhada à proposta da turnê.

* **Paleta de Cores:** Dourado intenso, tons neutros e toques de *Rose Gold*
* **Tipografia:**

  * **H1 / Títulos:** Fonte serifada para elegância
  * **Corpo / Texto:** **Inter** — clara e legível
  * **Botões / Destaques:** **Ubuntu** — moderna e forte
* **CTAs:** Botões de alta conversão com gradiente dourado, `rounded-full` e **efeito Pulse Glow**

---

## ⚙️ Instalação e Configuração

### 1. Pré-requisitos

* **Node.js** v18+
* **npm** ou **yarn**
* Conta ativa no [Stripe](https://stripe.com/)
* Conta no [Resend](https://resend.com/)

### 2. Clonar o Repositório

```bash
git clone [URL-DO-SEU-REPOSITORIO]
cd waves-and-beauty
```

### 3. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 4. Configurar Variáveis de Ambiente

Crie o arquivo `.env.local` na raiz do projeto e adicione:

```bash
# Chaves do Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="rk_live_SUA_CHAVE_PUBLICAVEL"
STRIPE_SECRET_KEY="sk_live_SUA_CHAVE_SECRETA"

# Chave da API do Resend
RESEND_API_KEY="re_SUA_CHAVE_RESEND"
```

### 5. Rodar o Projeto

```bash
npm run dev
# ou
yarn dev
```

O app ficará disponível em:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 💳 Estrutura do Checkout

### 🧩 Frontend (`CheckoutModal.tsx`)

* Gerencia a coleta dos dados de pagamento via **Stripe Elements**
* Envia informações seguras para `/api/checkout`
* Exibe o QR Code PIX e mensagens de sucesso/erro

### ⚙️ Backend (`app/api/checkout/route.ts`)

* Recebe `amount`, `paymentMethod` e `billingDetails`
* Cria e confirma **PaymentIntents** (Stripe)
* Retorna **QR Code PIX (base64)** ou status de pagamento
* Envia e-mail de confirmação via **Resend**

---

## 🧪 Testando o Checkout

1. Inicie o servidor:

   ```bash
   npm run dev
   ```
2. Acesse: [http://localhost:3000](http://localhost:3000)
3. Clique em **“Garanta sua Vaga”**

### 💳 Teste com Cartão de Crédito

| Campo     | Valor                                                       |
| :-------- | :---------------------------------------------------------- |
| Número    | `4242 4242 4242 4242`                                       |
| Validade  | Qualquer data futura                                        |
| CVC       | `123`                                                       |
| Resultado | Exibe “Pagamento Aprovado!” e envia o e-mail de confirmação |

### ⚡ Teste com PIX

* Selecione o método **PIX**
* O modal exibirá o **QR Code** e a **chave Copia e Cola**
* O pagamento será confirmado após leitura real do QR Code

---

## 🧭 Estrutura do Projeto

```
waves-and-beauty/
│
├── app/
│   ├── api/checkout/route.ts       # Lógica de checkout (Stripe + PIX)
│   └── page.tsx                    # Página principal da landing
│
├── components/
│   ├── CheckoutModal.tsx           # Modal de pagamento integrado
│   └── CTAButton.tsx               # Botões principais com animação
│
├── styles/
│   └── globals.css                 # Estilos globais, fontes e reset
│
├── public/                         # Imagens e ícones
└── tailwind.config.ts              # Cores, fontes e animações customizadas
```

---

## 🚀 Deploy

O projeto foi otimizado para deploy na **Vercel**:

1. Configure as variáveis de ambiente no painel da Vercel:

   * `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   * `STRIPE_SECRET_KEY`
   * `RESEND_API_KEY`
2. Faça o deploy com:

   ```bash
   vercel --prod
   ```

---

## 📞 Contato

Desenvolvido com 💖 por **[thomas eduardo]**
📫 [Seu E-mail]
💼 [LinkedIn / Portfólio / Site Pessoal]

*Aberto a colaborações e parcerias!*
