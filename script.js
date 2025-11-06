document.addEventListener('DOMContentLoaded', () =>{

    const toggleMenu = () =>{
        const menu = document.getElementById('navMenu');
        if(menu)menu.classList.toggle('active');
    };
    window.toggleMenu = toggleMenu;

    const scrollToSection = (sectionId) =>{
        const section = document.getElementById('sectionId');

        if(!sectionId) return;

        const headerHeight = 70;

        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({top: sectionPosition, behavior:'smooth'});

        const menu = document.getElementById('navMenu');
        if(menu) menu.classList.remove('active');


        const handleSubmit = (event) =>{
            event.preventDefault();
            const form = documen.getElementById('VoluntariosForm');
            if(!form) return;

            if(form.dataset.submmiting === 'true') return;
            form.dataset.submmiting = 'true'

            const nome = form.nome.value.trim();
            const email = form.email.value.trim();

            if (!nome || !email){
                alert('Preencha os campos, por gentileza');
                form.dataset.submmiting = 'false';
                return;
            }
        }
    }





});