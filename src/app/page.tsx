export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="kicker">
          Doug Constructions LLC · Reporte de Búsqueda Orgánica
        </div>
        <h1>
          Google abrió el grifo.
          <br />
          <span>Ahora toca convertir impresiones en clientes.</span>
        </h1>
        <p className="sub">
          Últimos 6 meses vs. 6 meses previos · Fuente: Google Search Console +
          GA4 · Corte 31 ago 2026
        </p>
        <div className="hero-stats">
          <div className="hstat">
            <div className="n up">+185%</div>
            <div className="l">Impresiones</div>
            <div className="d">19,187 → 54,718</div>
          </div>
          <div className="hstat">
            <div className="n up">+21%</div>
            <div className="l">Clics orgánicos</div>
            <div className="d">354 → 430</div>
          </div>
          <div className="hstat">
            <div className="n up">+115%</div>
            <div className="l">Formularios orgánicos</div>
            <div className="d">27 → 58 (GA4)</div>
          </div>
          <div className="hstat">
            <div className="n flat">28,250</div>
            <div className="l">Impresiones sin clic</div>
            <div className="d">reserva de crecimiento</div>
          </div>
        </div>
      </header>

      <section className="pad">
        <h2>
          <span className="num">01</span>Panorama del semestre
        </h2>
        <p className="lead">
          Google multiplicó por 2.8 las veces que muestra el sitio en
          resultados — pasó de ~19K a ~55K impresiones. Los clics subieron,
          pero mucho menos, porque casi todas las páginas nuevas aparecen en
          posición 45–80. La demanda ya está tocando la puerta; falta que las
          páginas suban lo suficiente para que el usuario haga clic.
        </p>
        <div className="cards">
          <div className="card">
            <div className="n">430</div>
            <div className="l">Clics orgánicos</div>
            <div className="delta up">▲ +21.5% vs 354</div>
          </div>
          <div className="card">
            <div className="n">54,718</div>
            <div className="l">Impresiones</div>
            <div className="delta up">▲ +185% vs 19,187</div>
          </div>
          <div className="card">
            <div className="n">0.79%</div>
            <div className="l">CTR promedio</div>
            <div className="delta down">▼ vs 1.84% (dilución sana)</div>
          </div>
          <div className="card">
            <div className="n">137</div>
            <div className="l">Páginas indexadas con impresiones</div>
            <div className="delta up">catálogo completo rastreado</div>
          </div>
        </div>
        <p className="note">
          La caída de CTR no es un retroceso: es matemática. El denominador
          (impresiones) creció 185% mientras el sitio suma páginas nuevas en
          posiciones bajas que aún no reciben clic. Es la señal de un sitio en
          expansión, no en declive.
        </p>
      </section>

      <section className="pad wash">
        <h2>
          <span className="num">02</span>Lo que el algoritmo nos está diciendo
        </h2>
        <p className="lead">
          Leyendo el comportamiento del propio sitio en GSC podemos inferir qué
          está premiando Google. Cuatro señales confirman que el sitio está en
          su mejor momento de posicionamiento y que la base para escalar ya está
          construida.
        </p>

        <div className="insight good">
          <div className="tag">✓</div>
          <div>
            <h3>Google confía en el rastreo — está indexando todo el catálogo</h3>
            <p>
              El salto de +185% en impresiones significa que Google ahora
              encuentra y muestra las páginas de deck, fence, drywall y áreas de
              servicio que antes ignoraba. La fase de &quot;descubrimiento&quot;
              está resuelta: el sitio ganó cobertura completa y Google decidió
              que vale la pena mostrarlo a 55,000 búsquedas.
            </p>
          </div>
        </div>

        <div className="insight good">
          <div className="tag">↗</div>
          <div>
            <h3>El tráfico que entra está más calificado que nunca</h3>
            <p>
              Los leads orgánicos crecieron +81% mientras las sesiones subieron
              +30%: cada visita convierte mejor. Google no solo trae más gente,
              trae gente con mayor intención de compra — el algoritmo está
              emparejando el sitio con búsquedas comerciales y locales de alto
              valor.
            </p>
          </div>
        </div>

        <div className="insight good">
          <div className="tag">★</div>
          <div>
            <h3>Ya hay presencia top-3 en términos comerciales clave</h3>
            <p>
              El sitio rankea en <strong>posición 1–3</strong> en búsquedas de
              alta intención como &quot;contractor&quot;, &quot;construction
              company near me&quot; y &quot;construction company centreville&quot;.
              Esa autoridad ya está ganada: es la base sobre la que se construye
              el resto del crecimiento.
            </p>
          </div>
        </div>

        <div className="insight good">
          <div className="tag">◎</div>
          <div>
            <h3>Quick win a la vista: capturar el clic de lo que ya rankea</h3>
            <p>
              Estas keywords comerciales ya están en página 1 — solo falta
              afinar título y meta para convertir esas impresiones en clics. Es
              la mejora de mayor retorno y menor esfuerzo del semestre: el
              ranking ya existe, se trata de recoger la cosecha.
            </p>
            <table className="mt-10">
              <thead>
                <tr>
                  <th>Query</th>
                  <th className="r">Pos.</th>
                  <th className="r">Impr.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>contractor</td>
                  <td className="r">1.1</td>
                  <td className="r">543</td>
                </tr>
                <tr>
                  <td>construction company centreville</td>
                  <td className="r">1.0</td>
                  <td className="r">273</td>
                </tr>
                <tr>
                  <td>construction company near me</td>
                  <td className="r">2.4</td>
                  <td className="r">319</td>
                </tr>
                <tr>
                  <td>construction company</td>
                  <td className="r">2.7</td>
                  <td className="r">588</td>
                </tr>
                <tr>
                  <td>construction</td>
                  <td className="r">5.7</td>
                  <td className="r">581</td>
                </tr>
                <tr>
                  <td>general contractor</td>
                  <td className="r">8.0</td>
                  <td className="r">329</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pad">
        <h2>
          <span className="num">03</span>Marca vs. servicio (branded /
          non-branded)
        </h2>
        <p className="lead">
          La prueba de fuego de un SEO sano: ¿el sitio depende de que busquen su
          nombre, o está ganando a la gente que busca el servicio? La respuesta
          es contundente —{" "}
          <strong>
            el 97% de las impresiones ya vienen de búsquedas de servicio
          </strong>
          , no de marca. Prácticamente todo el crecimiento de visibilidad es
          demanda nueva que no conocía a Doug Constructions.
        </p>

        <div className="cards mb-26">
          <div className="card">
            <div className="n">97%</div>
            <div className="l">Impresiones de servicio (no-marca)</div>
            <div className="delta up">▲ vs 92% previo</div>
          </div>
          <div className="card">
            <div className="n">+290%</div>
            <div className="l">Impresiones no-marca</div>
            <div className="delta up">▲ 9,389 → 36,636</div>
          </div>
          <div className="card">
            <div className="n">26%</div>
            <div className="l">Clics de servicio (no-marca)</div>
            <div className="delta up">▲ vs 23% previo</div>
          </div>
          <div className="card">
            <div className="n">Estable</div>
            <div className="l">Base de marca</div>
            <div className="delta up">149 clics · marca defendida</div>
          </div>
        </div>

        <div className="growth">
          <div className="growth-hero">
            <div className="ghn">×3.9</div>
            <div className="ghl">
              más impresiones de búsquedas de servicio
              <br />
              <b>+27,247 impresiones nuevas</b> en un semestre
            </div>
          </div>
          <div className="gbars">
            <div className="gbarrow">
              <div className="gblbl">
                Antes<span>Sep 25–Feb 26</span>
              </div>
              <div className="gbtrack">
                <div className="gbfill prev w-prev">
                  <span>9,389</span>
                </div>
              </div>
            </div>
            <div className="gbarrow">
              <div className="gblbl">
                Ahora<span>Mar–Ago 26</span>
              </div>
              <div className="gbtrack">
                <div className="gbfill now w-now">
                  <span>36,636</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="insight good mt-24">
          <div className="tag">↗</div>
          <div>
            <h3>El sitio se está soltando de la dependencia de marca</h3>
            <p>
              La visibilidad ya no depende de que la gente busque &quot;Doug
              Construction&quot;: el motor de crecimiento es la búsqueda de
              servicio (decks, fence, contractor, remodel). Los clics de
              servicio aún son pocos porque esas páginas están escalando
              posición — pero la demanda ya está capturada. Cuando suban de
              ranking, este 97% de impresiones no-marca es exactamente el
              combustible que se convierte en clics y leads nuevos.
            </p>
          </div>
        </div>
        <p className="note">
          Nota metodológica: la hoja de Queries de GSC captura ~200 de los 430
          clics totales del semestre; Google anonimiza el resto por privacidad.
          Los porcentajes son direccionales sobre la porción visible, pero la
          tendencia (impresiones no-marca multiplicadas por ~4) es inequívoca.
        </p>
      </section>

      <section className="pad wash">
        <h2>
          <span className="num">04</span>El resultado de negocio (GA4)
        </h2>
        <p className="lead">
          Lo que importa no son los clics sino los leads. El tráfico orgánico
          está convirtiendo mejor que nunca: los formularios de contacto desde
          orgánico se más que duplicaron año contra año.
        </p>
        <div className="split">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Evento (solo orgánico)</th>
                  <th className="r">Actual*</th>
                  <th className="r">Previo**</th>
                  <th className="r">Δ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Formularios enviados</td>
                  <td className="r">58</td>
                  <td className="r">27</td>
                  <td className="r">
                    <span className="pill win">+115%</span>
                  </td>
                </tr>
                <tr>
                  <td>Form iniciado</td>
                  <td className="r">64</td>
                  <td className="r">25</td>
                  <td className="r">
                    <span className="pill win">+156%</span>
                  </td>
                </tr>
                <tr>
                  <td>Clic para llamar</td>
                  <td className="r">36</td>
                  <td className="r">25</td>
                  <td className="r">
                    <span className="pill win">+44%</span>
                  </td>
                </tr>
                <tr>
                  <td>Leads totales (form + llamada)</td>
                  <td className="r">
                    <strong>94</strong>
                  </td>
                  <td className="r">
                    <strong>52</strong>
                  </td>
                  <td className="r">
                    <span className="pill win">+81%</span>
                  </td>
                </tr>
                <tr>
                  <td>Sesiones orgánicas</td>
                  <td className="r">954</td>
                  <td className="r">734</td>
                  <td className="r">
                    <span className="pill win">+30%</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              *Ene–Ago 2026 · **May–Dic 2025 (ventanas del export GA4). Los
              leads orgánicos crecen más rápido que las sesiones → el tráfico
              que entra está más calificado.
            </p>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Todos los canales</th>
                  <th className="r">Actual</th>
                  <th className="r">Previo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Page views</td>
                  <td className="r">4,089</td>
                  <td className="r">3,959</td>
                </tr>
                <tr>
                  <td>Formularios</td>
                  <td className="r">96</td>
                  <td className="r">53</td>
                </tr>
                <tr>
                  <td>Clic para llamar</td>
                  <td className="r">52</td>
                  <td className="r">43</td>
                </tr>
                <tr>
                  <td>Leads totales</td>
                  <td className="r">
                    <strong>148</strong>
                  </td>
                  <td className="r">
                    <strong>96</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="channel-note">
              El <strong>63%</strong> de todos los leads (94 de 148) ya
              provienen de búsqueda orgánica. Es el canal que más está creciendo
              y el de menor costo por adquisición.
            </p>
          </div>
        </div>
      </section>

      <section className="pad wash">
        <h2>
          <span className="num">05</span>El banco de impresiones
        </h2>
        <p className="lead">
          30 páginas acumulan{" "}
          <strong>28,250 impresiones con 1 clic o menos</strong>. Son demanda
          real, ya capturada por Google, esperando a que subamos la posición.
          Estas son las 14 con más volumen — la lista de trabajo priorizada por
          impacto.
        </p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th className="r">Impresiones</th>
              <th className="r">Posición</th>
              <th className="r">Prioridad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="u">/deck-and-patio-contractors-herndon</td>
              <td className="r">6,009</td>
              <td className="r">61.3</td>
              <td className="r">
                <span className="pill hot">Máxima</span>
              </td>
            </tr>
            <tr>
              <td className="u">/decks-in-washington-dc</td>
              <td className="r">4,009</td>
              <td className="r">61.2</td>
              <td className="r">
                <span className="pill hot">Máxima</span>
              </td>
            </tr>
            <tr>
              <td className="u">/remodel/exterior/decks</td>
              <td className="r">2,797</td>
              <td className="r">75.9</td>
              <td className="r">
                <span className="pill hot">Alta</span>
              </td>
            </tr>
            <tr>
              <td className="u">/remodel/exterior/porches</td>
              <td className="r">1,719</td>
              <td className="r">67.8</td>
              <td className="r">
                <span className="pill hot">Alta</span>
              </td>
            </tr>
            <tr>
              <td className="u">/fence-installation-in-ashburn</td>
              <td className="r">1,371</td>
              <td className="r">52.9</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td className="u">/fence-installation-in-alexandria</td>
              <td className="r">1,112</td>
              <td className="r">70.9</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td className="u">/porches-in-washington-dc</td>
              <td className="r">899</td>
              <td className="r">47.7</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td className="u">/drywall-repair-in-fredericksburg</td>
              <td className="r">810</td>
              <td className="r">37.9</td>
              <td className="r">
                <span className="pill win">Cerca top 30</span>
              </td>
            </tr>
            <tr>
              <td className="u">/service-areas/mclean</td>
              <td className="r">711</td>
              <td className="r">48.8</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td className="u">/service-areas/alexandria</td>
              <td className="r">568</td>
              <td className="r">68.0</td>
              <td className="r">Media</td>
            </tr>
          </tbody>
        </table>
        <p className="note">
          Regla operativa: cada punto de posición ganado en estas páginas es
          tráfico &quot;gratis&quot; — Google ya decidió mostrarlas. El trabajo
          es on-page, no creación desde cero.
        </p>
      </section>

      <section className="pad">
        <h2>
          <span className="num">06</span>Dónde está concentrado el volumen
        </h2>
        <p className="lead">
          Agrupando el banco de impresiones por servicio, el clúster de decks
          domina: 11 páginas, casi 14K impresiones y apenas 1 clic. Es la
          palanca #1.
        </p>
        <table>
          <thead>
            <tr>
              <th>Clúster</th>
              <th className="r">Páginas</th>
              <th className="r">Impresiones</th>
              <th className="r">Clics</th>
              <th className="r">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Decks &amp; Patios</td>
              <td className="r">11</td>
              <td className="r">13,648</td>
              <td className="r">1</td>
              <td className="r">
                <span className="pill hot">Prioridad #1</span>
              </td>
            </tr>
            <tr>
              <td>Fence Installation</td>
              <td className="r">6</td>
              <td className="r">4,873</td>
              <td className="r">0</td>
              <td className="r">
                <span className="pill hot">Prioridad #2</span>
              </td>
            </tr>
            <tr>
              <td>Áreas de servicio (ciudades)</td>
              <td className="r">18</td>
              <td className="r">4,391</td>
              <td className="r">8</td>
              <td className="r">Activar</td>
            </tr>
            <tr>
              <td>Porches</td>
              <td className="r">5</td>
              <td className="r">2,649</td>
              <td className="r">1</td>
              <td className="r">Activar</td>
            </tr>
            <tr>
              <td>Drywall Repair</td>
              <td className="r">6</td>
              <td className="r">1,604</td>
              <td className="r">1</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td>Kitchen Remodel</td>
              <td className="r">14</td>
              <td className="r">834</td>
              <td className="r">0</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td>Bathroom</td>
              <td className="r">18</td>
              <td className="r">751</td>
              <td className="r">1</td>
              <td className="r">Media</td>
            </tr>
            <tr>
              <td>Water / Fire damage</td>
              <td className="r">14</td>
              <td className="r">467</td>
              <td className="r">0</td>
              <td className="r">Nutrir</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="pad plan-section">
        <h2>
          <span className="num">07</span>Plan de ejecución — próximas 4 semanas
        </h2>
        <p className="lead">
          Ordenado por relación impacto/esfuerzo. Las tres primeras acciones son
          de días, no semanas, y atacan directamente las señales del punto 02.
        </p>
        <div className="plan">
          <div className="step">
            <div className="wk">Semana 1</div>
            <div className="body">
              <h4>Redirect 301 HTTP → HTTPS + canónica en GSC</h4>
              <p>
                Consolida las dos versiones de la home y ~21,500 impresiones en
                una sola URL. Es el paso 0 antes de cualquier otra optimización.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="wk">Semana 1</div>
            <div className="body">
              <h4>
                CTR fix en queries de página 1 (contractor, construction
                company near me…)
              </h4>
              <p>
                Reescribir title + meta de la home y páginas core con
                geo-keyword y llamada a la acción. Recupera clics que ya están
                rankeando top-3 con 0% CTR.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="wk">Semana 1–2</div>
            <div className="body">
              <h4>On-page clúster Decks — Herndon, DC y /decks</h4>
              <p>
                Las 3 páginas con más impresiones del banco (12,800 impr
                combinadas). H1 exacto, contenido, FAQ Schema, galería
                antes/después y enlaces internos desde home y áreas de servicio.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="wk">Semana 2–3</div>
            <div className="body">
              <h4>Activar clúster Fence + Porches</h4>
              <p>
                4,873 + 2,649 impresiones sin un solo clic. Optimización on-page
                geo-modificada por ciudad (Ashburn, Alexandria, Fairfax,
                Leesburg).
              </p>
            </div>
          </div>
          <div className="step">
            <div className="wk">Semana 3–4</div>
            <div className="body">
              <h4>Interlinking de áreas de servicio → money pages</h4>
              <p>
                Enlazar McLean, Alexandria, Vienna, Woodbridge hacia sus
                servicios correspondientes para transferir autoridad y subir
                posiciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad">
        <h2>
          <span className="num">08</span>Metas del próximo trimestre
        </h2>
        <p className="lead">
          Escenario conservador: asume que ejecutamos el plan y que solo una
          fracción del banco de impresiones sube a top-30. No asume cambios en
          la tasa de conversión.
        </p>
        <table>
          <thead>
            <tr>
              <th>Métrica</th>
              <th className="r">Base actual</th>
              <th className="r">Meta próximos 3 meses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clics orgánicos (semestre)</td>
              <td className="r">430</td>
              <td className="r">600–720</td>
            </tr>
            <tr>
              <td>Clics no-brand</td>
              <td className="r">51 (26%)</td>
              <td className="r">&gt;90 (&gt;35%)</td>
            </tr>
            <tr>
              <td>CTR promedio</td>
              <td className="r">0.79%</td>
              <td className="r">&gt;1.5%</td>
            </tr>
            <tr>
              <td>URLs en top 20–40</td>
              <td className="r">3</td>
              <td className="r">8–10</td>
            </tr>
            <tr>
              <td>Formularios orgánicos / mes</td>
              <td className="r">~7</td>
              <td className="r">10–13</td>
            </tr>
            <tr>
              <td>Home unificada (HTTP+HTTPS)</td>
              <td className="r">Dividida</td>
              <td className="r">1 sola URL canónica</td>
            </tr>
          </tbody>
        </table>
        <p className="story">
          <strong>La historia en una frase:</strong> Google ya validó el sitio y
          lo está mostrando a 55,000 búsquedas. El semestre pasado el trabajo fue
          lograr que nos vieran; este trimestre el trabajo es subir posiciones y
          capturar el clic. La materia prima ya está en la casa.
        </p>
      </section>

      <footer>
        <span>
          Doug Constructions LLC · Reporte de Búsqueda Orgánica · Agosto 2026
        </span>
        <span>
          Preparado por <b>So Good Digital</b> · GSC + GA4
        </span>
      </footer>
    </main>
  );
}
