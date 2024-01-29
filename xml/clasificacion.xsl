﻿<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="css/style.css"/>
      <title>Clasificación</title>
      <script src="js/script.js" defer=""></script>
      <link rel="shortcut icon" href="img/logo-liga.png" type="image/x-icon"></link>
    </head>
    <body>
    <!-- menú de navegación de la página web -->
      <header>
        <a href="index.html" class="logo">
          <img src="img/logo-liga.png" alt="RFEBM" width="120px"/>
        </a>
        <div class="titulo">
          <h1>REAL FEDERACION ESPAÑOLA DE BALONMANO</h1>
        </div>
        <div class="poligon"></div>
        <nav id="nav">
            <!-- botón de cerrar para el menú para móviles -->
            <img src="img/close-menu.png" class="close-menu" id="close-menu"/>
          <ul class="menu-horizontal">
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="equipos.xml" >Equipos</a>
              <ul class="menu-vertical">
                <li><a href="xml/bilbao.xml">Bilbao</a></li>
                <li><a href="xml/barcelona.xml">Barcelona</a></li>
                <li><a href="xml/madrid.xml">Madrid</a></li>
                <li><a href="xml/zaragoza.xml">Zaragoza</a></li>
                <li><a href="xml/salamanca.xml">Salamanca</a></li>
                <li><a href="xml/sevilla.xml">Sevilla</a></li>
              </ul>
            </li>
            <li>
              <a href="calendario.html">Jornadas</a>
            </li>
            <li>
              <a href="clasificacion.xml" class="select">Clasificacion</a>
            </li>
            <li>
              <a href="noticias.html">Noticias</a>
            </li>
          </ul>
        </nav>
        <!-- botón de apertura del menú para móviles -->
        <img src="img/open-menu.png" class="open-menu" id="open-menu"/>
      </header>

      <!-- ________________________________contenido-main_________________________________ -->
      <main class="clasificacion-main">

      <!-- ________________________________contenido-XML_________________________________ -->

      <section class="container-cambiar-temporada">
        <a href="anterior/clasificacion.html" class="cambiar-temporada">Ver temporada anterior</a>
    </section>

        <section class="container-tabla">
          <!-- tabla de clasificación -->
          <table>
            <tr>

              <th>POS</th>
              <th class="th-equipo">Equipo</th>
              <th>Pts.</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>

          </tr>
          <!-- por cada elemento <posición> -->
          <xsl:for-each select="//posicion">
          <!-- crear una fila con los siguientes valores: -->
            <tr>
                <td><xsl:value-of select="@num"/></td>
                <td class="equipo-tabla"> <div><img src="img/{equipo/escudo}"/> <xsl:value-of select="equipo/nombre"/> </div></td>
                <td><xsl:value-of select="puntos"/></td>
                <td><xsl:value-of select="jugados"/></td>
                <td><xsl:value-of select="ganados"/></td>
                <td><xsl:value-of select="empatados"/></td>
                <td><xsl:value-of select="perdidos"/></td>
                <td><xsl:value-of select="goles-favor"/></td>
                <td><xsl:value-of select="goles-contra"/></td>
            </tr>
          </xsl:for-each>
          </table>
        </section>

      <!-- ______________________________________________________________________________ -->
        <!-- botón para cambiar color de la página -->
        <section class="fix-btn">
          <img src="img/luna.png" alt="modo-oscuro" class="icon-tema" id="icon-tema"/>
        </section>
      </main>


      <footer>
        <section class="top-footer">
          <div class="contacto">
            <h3>CONTACTO</h3>
            <ul>
              <li>
                <img src="img/icon-telefono.png" width="25px"/>+34 915 48 35 58
              </li>
              <li>
                <img src="img/icon-fax.png" width="25px"/>+34 915 42 70 49
              </li>
              <li>
                <img src="img/icon-mail.png" width="25px"/>
                <a href="mailto:rfebm@rfebm.com">rfebm@rfebm.com</a>
              </li>
              <li>
                <img src="img/icon-ubi.png" width="25px"/>Ornilla Doctor Kalea, 2, 48004 Bilbo, Bizkaia
              </li>
            </ul>
          </div>
          <div class="redes">
            <h3>REDES</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/rfebalonmano/?hl=es">
                  <img src="img/icon-ig.png"
                                    width="50px"/>
                  <p>@rfebalonmano</p>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RFEBalonmano?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <img
                                    src="img/icon-twt.png" width="50px"/>
                  <p>@RFEBalonmano</p>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@RFEBM">
                  <img src="img/icon-yt.png" width="50px"/>
                  <p>@RFEBM</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="bottom-footer">
          <div class="copy-footer">
            <img src="img/logo-liga.png" alt="RFEVB" width="50px"/> 
            <p>Copyright RFEBM.</p>
          </div>
          <div class="info-footer">
                    |
            <a href="footer/condiciones-legles.html">Condiciones Legales</a> |
            <a href="index.html">Inicio</a> |
          </div>
        </section>
      </footer>
    </body>
  </html>
  </xsl:template>
</xsl:stylesheet>