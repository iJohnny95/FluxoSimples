// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Translation dictionary
const translations = {
    en: {
        "Serviços": "Services",
        "Sobre Nós": "About Us",
        "Testemunhos": "Testimonials",
        "Contacto": "Contact",
        "O Que Fazemos": "What We Do",
        "Automação de Processos": "Process Automation",
        "Melhoramos a eficiência dos seus fluxos de trabalho com soluções automatizadas, eliminando o esforço manual desnecessário.": "We improve the efficiency of your workflows with automated solutions, eliminating unnecessary manual effort.",
        "Gestão Automatizada de CRM": "Automated CRM Management",
        "Transforme a forma como comunica com os seus clientes, garantindo um acompanhamento eficiente e proativo.": "Transform the way you communicate with your customers, ensuring efficient and proactive follow-up.",
        "Automação de Dados": "Data Automation",
        "Simplifique a entrada de dados e relatórios, assegurando a sincronização perfeita entre plataformas.": "Simplify data entry and reporting, ensuring perfect synchronization between platforms.",
        "Chatbots Inteligentes": "Intelligent Chatbots",
        "Melhore o atendimento ao cliente com chatbots automáticos, disponíveis 24/7, que garantem uma experiência eficiente.": "Improve customer service with automatic chatbots, available 24/7, ensuring an efficient experience.",
        "Integração e Automação de API": "API Integration and Automation",
        "Integramos e automatizamos fluxos de trabalho usando APIs para melhorar a eficiência e reduzir o esforço manual.": "We integrate and automate workflows using APIs to improve efficiency and reduce manual effort.",
        "Extração e Processamento de Dados": "Data Extraction and Processing",
        "Automatizamos a extração, transformação e carregamento de dados para garantir informações precisas e oportunas.": "We automate the extraction, transformation, and loading of data to ensure accurate and timely information.",
        "Automação de Gestão de Leads": "Lead Management Automation",
        "Automatizamos a atribuição e gestão de leads para garantir acompanhamentos oportunos e melhores taxas de conversão.": "We automate lead assignment and management to ensure timely follow-ups and better conversion rates.",
        "Automação de Tarefas": "Task Automation",
        "Automatizamos tarefas diárias para liberar tempo para atividades mais estratégicas.": "We automate daily tasks to free up time for more strategic activities.",
        "O Que Dizem os Nossos Clientes": "What Our Clients Say",
        "A FluxoSimples trouxe uma mudança revolucionária à nossa empresa. A nossa produtividade duplicou com a automação dos processos internos.": "FluxoSimples brought a revolutionary change to our company. Our productivity doubled with the automation of internal processes.",
        "Pedro, Diretor Operacional": "Pedro, Operations Director",
        "O chatbot implementado pela FluxoSimples aumentou significativamente a satisfação dos nossos clientes e as vendas online cresceram 40%.": "The chatbot implemented by FluxoSimples significantly increased our customer satisfaction and online sales grew by 40%.",
        "Ana, Gerente de Vendas": "Ana, Sales Manager",
        "Graças à FluxoSimples, simplificámos os nossos processos de entrada de dados, poupando-nos inúmeras horas todas as semanas.": "Thanks to FluxoSimples, we simplified our data entry processes, saving us countless hours every week.",
        "João, Gestor de TI": "João, IT Manager",
        "As soluções de automação de fluxos de trabalho fornecidas pela FluxoSimples melhoraram muito a nossa comunicação interna e eficiência.": "The workflow automation solutions provided by FluxoSimples greatly improved our internal communication and efficiency.",
        "Maria, Diretora de RH": "Maria, HR Director",
        "O nosso atendimento ao cliente nunca foi melhor desde que implementámos os chatbots inteligentes da FluxoSimples.": "Our customer service has never been better since we implemented FluxoSimples' intelligent chatbots.",
        "Luís, Gestor de Atendimento ao Cliente": "Luís, Customer Service Manager",
        "Quem Somos": "Who We Are",
        "Com uma equipa de especialistas em automação sediada em Portugal, a nossa missão é elevar os processos empresariais através de soluções inovadoras e de alto impacto. Transformamos desafios em oportunidades, ajudando empresas a focar-se no crescimento sustentável.": "With a team of automation specialists based in Portugal, our mission is to elevate business processes through innovative and high-impact solutions. We turn challenges into opportunities, helping companies focus on sustainable growth.",
        "Pronto para revolucionar o seu negócio? Entre em contacto connosco e agende uma consultoria especializada.": "Ready to revolutionize your business? Contact us and schedule a specialized consultation.",
        "Nome": "Name",
        "Telefone": "Phone",
        "Descreva como podemos ajudar": "Describe how we can help",
        "Enviar Mensagem": "Send Message",
        "Soluções de Automação Empresarial de Elevada Qualidade": "High-Quality Business Automation Solutions",
        "Redefina o futuro da sua empresa com automações personalizadas que elevam a eficiência e simplificam os processos.": "Redefine the future of your company with custom automations that enhance efficiency and simplify processes.",
        "Agende a sua Consultoria": "Schedule Your Consultation",
        "© 2024 FluxoSimples | Soluções Empresariais Premium para uma Transformação Digital": "© 2024 FluxoSimples | Premium Business Solutions for Digital Transformation"
    },
    pt: {
        // Portuguese translations (default)
    }
};

// Function to set the language
function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key] || key;
    });
}

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Add this function at the beginning of your scripts.js file
function preventZoom(e) {
    var t2 = e.timeStamp;
    var t1 = e.currentTarget.dataset.lastTouch || t2;
    var dt = t2 - t1;
    var fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // not double-tap

    e.preventDefault();
    e.target.click();
}

// Add this code at the end of your scripts.js file
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('touchstart', preventZoom, false);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
}

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    try {
        console.log('Submitting form data:', formProps);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formProps),
        });
        
        console.log('Response status:', response.status);
        let data;
        try {
            data = await response.json();
        } catch (error) {
            console.error('Error parsing JSON:', error);
            throw new Error('Invalid response from server');
        }
        console.log('Response data:', data);
        
        if (response.ok && data.success) {
            alert('Message sent successfully!');
            e.target.reset();
        } else {
            throw new Error(data.error || 'Server responded with an error');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred: ' + error.message);
    }
});
