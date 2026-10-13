import { useState } from 'react'
import { textos } from '../i18n/textos'
import emailjs from '@emailjs/browser'

function FormularioContato({ idioma }) {
    const t = textos[idioma].contato

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erros, setErros] = useState({})
    const [status, setStatus] = useState("")

    function validar() {
        const novosErros = {}
        if (nome.trim() === "") novosErros.nome = true
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) novosErros.email = true
        if (mensagem.trim() === "") novosErros.mensagem = true
        return novosErros
    }

    async function aoEnviar(evento) {
        evento.preventDefault()
        setStatus("")
        const novosErros = validar()
        setErros(novosErros)
        if (Object.keys(novosErros).length > 0) return
        
        setStatus("enviando")
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { nome, email, mensagem },
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            )
            setStatus("sucesso")
            setNome("")
            setEmail("")
            setMensagem("")
        } catch (erro) {
            console.error(erro)
            setStatus("falha")
        }
    }

    return (
        <form onSubmit={aoEnviar} noValidate>
            <h2>{t.formTitulo}</h2>

            <label htmlFor="nome">{t.nome}</label>
            <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder={t.placeholderNome}
            />
            {erros.nome && <p className="erro">{t.erroNome}</p>}

            <label htmlFor="email">{t.email}</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholderEmail}
            />
            {erros.email && <p className="erro">{t.erroEmail}</p>}

            <label htmlFor="mensagem">{t.mensagem}</label>
            <textarea
                id="mensagem"
                rows="5"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder={t.placeholderMensagem}
            />
            {erros.mensagem && <p className="erro">{t.erroMensagem}</p>}

            <button type="submit" disabled={status === "enviando"}>
                {status === "enviando" ? t.enviando : t.enviar}
            </button>

            {status === "sucesso" && <p className="sucesso">{t.sucesso}</p>}
            {status === "falha" && <p className="erro">{t.falha}</p>}
        </form>
    )
}

export default FormularioContato