import React from 'react';
import { Phone, Clock, MapPin, CreditCard, Wallet, QrCode, MessageCircle } from 'lucide-react';

function App() {
  const whatsappNumber = "5562992176104";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const address = "Anapolis Goias, Q 0, L 10 - Jardim Gonçalves";
  const mapsLink = `https://maps.app.goo.gl/qhJ2Qhk31N7icJd27${encodeURIComponent(address)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=1920")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Lanchonete</h1>
            <p className="text-xl text-orange-200 mb-8">Sabor que dá vontade de voltar!</p>
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45" />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Peça Agora pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 -mt-20">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer relative"
          >
            <div className="absolute -left-2 top-8 w-4 h-4 bg-orange-100 rotate-45 group-hover:bg-orange-200 transition-colors" />
            <div className="bg-orange-100 rounded-2xl shadow-lg p-6 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-orange-200">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-full text-orange-600">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Localização</h3>
              <p className="text-gray-600 mb-2">{address}</p>
              <p className="text-orange-600 text-sm font-medium flex items-center gap-1">
                Abrir no Google Maps
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </p>
            </div>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer relative"
          >
            <div className="absolute -left-2 top-8 w-4 h-4 bg-green-100 rotate-45 group-hover:bg-green-200 transition-colors" />
            <div className="bg-green-100 rounded-2xl shadow-lg p-6 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-full text-green-600">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Contato</h3>
              <p className="text-gray-600 mb-2">(55) 62 9198-3835</p>
              <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                Chamar no WhatsApp
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </p>
            </div>
          </a>
          <div className="relative">
            <div className="absolute -left-2 top-8 w-4 h-4 bg-orange-100 rotate-45" />
            <div className="bg-orange-100 rounded-2xl shadow-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-full text-orange-600">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Horário</h3>
              <p className="text-gray-600">18:30 às 23:00 - Todos os dias</p>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Cardápio</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <MenuSection
              title="Lanches Especiais"
              image="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=500"
              items={[
                { 
                  name: 'X-Burger',
                  price: 'R$ 18,90',
                  description: 'Suculento hambúrguer grelhado na hora, queijo derretido, alface crocante, tomate fresquinho e nossa maionese especial',
                  highlight: '🔥 Mais Vendido!'
                },
                { 
                  name: 'X-Salada',
                  price: 'R$ 20,90',
                  description: 'Hambúrguer artesanal, queijo, presunto, alface, tomate e maionese da casa. Um clássico renovado!',
                },
                { 
                  name: 'X-Bacon',
                  price: 'R$ 22,90',
                  description: 'Hambúrguer suculento, queijo cheddar derretido, bacon crocante, alface, tomate e maionese especial',
                  highlight: '😋 Favorito dos Clientes'
                },
                { 
                  name: 'X-Tudo',
                  price: 'R$ 28,90',
                  description: 'O MONSTRO! 2 hambúrgueres, queijo, presunto, bacon, ovo, alface, tomate e maionese. Prepare-se!',
                  highlight: '👑 Rei do Cardápio'
                },
              ]}
            />
            
            <MenuSection
              title="Porções"
              image="https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=500"
              items={[
                { 
                  name: 'Batata Frita Especial',
                  price: 'P R$ 15,90 | M R$ 20,90 | G R$ 25,90',
                  description: 'Batatas crocantes por fora e macias por dentro, temperadas com nosso mix de temperos secreto',
                  highlight: '🥔 Crocante e Irresistível'
                },
                { 
                  name: 'Calabresa Acebolada',
                  price: 'R$ 32,90',
                  description: 'Calabresa defumada, salteada com cebola e pimentão. Acompanha pão',
                },
                { 
                  name: 'Frango a Passarinho',
                  price: 'R$ 35,90',
                  description: 'Pedacinhos de frango temperados e empanados, fritos até ficarem dourados e crocantes',
                  highlight: '🍗 Super Crocante'
                },
                { 
                  name: 'Anéis de Cebola',
                  price: 'R$ 28,90',
                  description: 'Anéis de cebola empanados e fritos, servidos com molho especial da casa',
                },
              ]}
            />
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-8 bg-orange-50 rounded-2xl px-6 mb-8 relative">
          <div className="absolute -left-2 top-8 w-4 h-4 bg-orange-50 rotate-45" />
          <h3 className="text-2xl font-semibold mb-6 text-center">Formas de Pagamento</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Wallet className="w-6 h-6 mr-2 text-orange-600" />
              <span>Dinheiro</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-orange-600" />
              <span>Cartão</span>
            </div>
            <div className="flex items-center">
              <QrCode className="w-6 h-6 mr-2 text-orange-600" />
              <span>PIX</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Ficou com fome?</h3>
          <p className="text-gray-600 mb-6">Faça seu pedido agora mesmo!</p>
          <div className="relative inline-block">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Chamar no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function MenuSection({ title, items, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
      <div className="absolute -left-2 top-8 w-4 h-4 bg-white rotate-45" />
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-orange-600">{title}</h3>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-lg">{item.name}</h4>
                <span className="text-orange-600 font-semibold">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              {item.highlight && (
                <span className="inline-block bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
                  {item.highlight}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
