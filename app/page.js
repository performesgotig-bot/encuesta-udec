'use client';

import React, { useMemo, useState } from 'react';

export default function EncuestaGamificada() {
  const [xp, setXp] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState({});

  const preguntas = useMemo(() => [
    {
      seccion: '2. ORGANIZACIÓN Y PLANEACIÓN',
      items: [
        'La universidad tiene objetivos y procesos claros.',
        'Existe buena coordinación entre áreas académicas y administrativas.',
        'Las decisiones institucionales responden a una planeación organizada.'
      ]
    },
    {
      seccion: '3. RECURSO HUMANO',
      items: [
        'El personal docente y administrativo demuestra compromiso con sus funciones.',
        'La universidad promueve capacitación y actualización constante.',
        'Existe buen trabajo en equipo dentro de la institución.'
      ]
    },
    {
      seccion: '4. TECNOLOGÍA Y PROCESOS',
      items: [
        'Las plataformas digitales y sistemas institucionales funcionan correctamente.',
        'Los procesos administrativos son ágiles y fáciles de realizar.',
        'La universidad ha avanzado en modernización y transformación digital.'
      ]
    },
    {
      seccion: '5. RECURSOS E INFRAESTRUCTURA',
      items: [
        'La infraestructura física responde a las necesidades de la comunidad universitaria.',
        'Los recursos tecnológicos y académicos son suficientes.',
        'La universidad administra adecuadamente sus recursos.'
      ]
    },
    {
      seccion: '6. RELACIÓN CON EL ENTORNO',
      items: [
        'La universidad mantiene buena relación con empresas y organizaciones externas.',
        'Existen suficientes oportunidades de prácticas, empleo o emprendimiento.',
        'La formación académica responde a las necesidades del entorno laboral actual.'
      ]
    },
    {
      seccion: '7. SATISFACCIÓN Y MEJORA',
      items: [
        'Me siento satisfecho con el funcionamiento general de la universidad.',
        'Considero que la universidad debe fortalecer su capacidad de innovación y adaptación.',
        'Recomendaría la Universidad de Cundinamarca a otras personas.'
      ]
    }
  ], []);

  const preguntasAbiertas = [
    {
      titulo: '19. ¿Cuál considera que es el principal problema de la universidad?',
      opciones: [
        'Procesos administrativos lentos',
        'Falta de modernización tecnológica',
        'Problemas de comunicación institucional'
      ]
    },
    {
      titulo: '20. ¿Qué aspecto debería mejorar prioritariamente la institución?',
      opciones: [
        'Infraestructura y espacios físicos',
        'Transformación digital',
        'Articulación académica y administrativa'
      ]
    },
    {
      titulo: '21. ¿Qué propuesta haría para fortalecer la Universidad de Cundinamarca?',
      opciones: [
        'Más convenios y oportunidades laborales',
        'Mayor innovación y emprendimiento',
        'Mejor capacitación y actualización institucional'
      ]
    }
  ];

  const handleScale = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));

    setXp((prev) => Math.min(prev + 2, 100));
  };

  const handleOption = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));

    setXp((prev) => Math.min(prev + 5, 100));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '24px',
    padding: '28px',
    marginBottom: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: '2px solid #e5e7eb',
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#0f3b63',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f3b63 0%, #165a96 45%, #00a859 100%)',
        padding: '30px 16px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div
          style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '28px',
            padding: '35px',
            marginBottom: '30px',
            color: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '44px',
                  fontWeight: '900',
                  marginBottom: '10px',
                }}
              >
                🎮 ENCUESTA INSTITUCIONAL
              </h1>

              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Diagnóstico organizacional y planeación — Universidad de Cundinamarca
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.14)',
                padding: '18px',
                borderRadius: '20px',
                minWidth: '220px',
              }}
            >
              <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>
                🏆 Nivel Institucional
              </p>

              <div
                style={{
                  width: '100%',
                  height: '16px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: `${xp}%`,
                    height: '100%',
                    background: '#facc15',
                    transition: '0.3s ease',
                  }}
                />
              </div>

              <p style={{ fontSize: '14px' }}>XP obtenida: {xp}/100</p>
            </div>
          </div>
        </div>

        {completed && (
          <div
            style={{
              background: '#dcfce7',
              color: '#14532d',
              padding: '24px',
              borderRadius: '24px',
              marginBottom: '24px',
              border: '2px solid #22c55e',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '34px', fontWeight: '900', marginBottom: '12px' }}>
              🏆 ¡Encuesta completada!
            </h2>

            <p style={{ fontSize: '18px' }}>
              Gracias por contribuir al fortalecimiento institucional.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div style={cardStyle}>
            <h2 style={titleStyle}>1. DATOS GENERALES</h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Tipo de participante
              </label>

              <select
                name="tipoParticipante"
                onChange={handleInput}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '14px',
                  border: '2px solid #d1d5db',
                }}
              >
                <option>Estudiante</option>
                <option>Docente</option>
                <option>Administrativo</option>
                <option>Directivo</option>
                <option>Egresado</option>
                <option>Personal externo</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Sede
              </label>

              <select
                name="sede"
                onChange={handleInput}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '14px',
                  border: '2px solid #d1d5db',
                }}
              >
                <option>Fusagasugá</option>
                <option>Facatativá</option>
                <option>Girardot</option>
                <option>Soacha</option>
                <option>Zipaquirá</option>
                <option>Ubaté</option>
                <option>Chía</option>
                <option>Otra</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Tiempo de vinculación
              </label>

              <select
                name="tiempo"
                onChange={handleInput}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '14px',
                  border: '2px solid #d1d5db',
                }}
              >
                <option>Menos de 1 año</option>
                <option>1 a 3 años</option>
                <option>4 a 6 años</option>
                <option>Más de 6 años</option>
              </select>
            </div>
          </div>

          {preguntas.map((grupo) => (
            <div key={grupo.seccion} style={cardStyle}>
              <h2 style={titleStyle}>{grupo.seccion}</h2>

              {grupo.items.map((pregunta) => (
                <div key={pregunta} style={{ marginBottom: '28px' }}>
                  <p
                    style={{
                      marginBottom: '14px',
                      fontWeight: '600',
                      color: '#111827',
                      lineHeight: '1.5',
                    }}
                  >
                    {pregunta}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '10px',
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((num) => {
                      const selected = answers[pregunta] === num;

                      return (
                        <button
                          key={`${pregunta}-${num}`}
                          type="button"
                          onClick={() => handleScale(pregunta, num)}
                          style={{
                            padding: '16px',
                            borderRadius: '16px',
                            border: selected
                              ? '2px solid #0f3b63'
                              : '2px solid #d1d5db',
                            background: selected ? '#00a859' : '#f9fafb',
                            color: selected ? 'white' : '#111827',
                            fontWeight: '800',
                            fontSize: '18px',
                            cursor: 'pointer',
                          }}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div style={cardStyle}>
            <h2 style={titleStyle}>8. PREGUNTAS ESTRATÉGICAS</h2>

            {preguntasAbiertas.map((pregunta) => (
              <div key={pregunta.titulo} style={{ marginBottom: '28px' }}>
                <p
                  style={{
                    marginBottom: '16px',
                    fontWeight: '700',
                    color: '#111827',
                    lineHeight: '1.5',
                  }}
                >
                  {pregunta.titulo}
                </p>

                <div
                  style={{
                    display: 'grid',
                    gap: '12px',
                  }}
                >
                  {pregunta.opciones.map((opcion) => {
                    const selected = answers[pregunta.titulo] === opcion;

                    return (
                      <button
                        key={opcion}
                        type="button"
                        onClick={() => handleOption(pregunta.titulo, opcion)}
                        style={{
                          padding: '18px',
                          borderRadius: '18px',
                          border: selected
                            ? '2px solid #0f3b63'
                            : '2px solid #d1d5db',
                          background: selected ? '#165a96' : '#f9fafb',
                          color: selected ? 'white' : '#111827',
                          fontWeight: '700',
                          fontSize: '16px',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        {opcion}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '20px',
              borderRadius: '24px',
              border: 'none',
              background: 'linear-gradient(90deg, #0f3b63, #00a859)',
              color: 'white',
              fontSize: '22px',
              fontWeight: '900',
              cursor: 'pointer',
            }}
          >
            🚀 Finalizar Encuesta
          </button>

        </form>
      </div>
    </div>
  );
}
