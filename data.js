let devDesc = `

    > OptiFine ahora es jugable si has descargado versiones y no está disponible su servidor
    <br>> Agregado Tab de Mods (BETA)
    <br>> Arreglado error de Forge al lanzar versiones mayores a 1.21.11 donde detectaba instalación legacy -1.13

`

let releaseDesc = `

    > Arreglado problema que devolvía la interfaz a la primera instancia al cambiar de modloader en cualquier otra instancia
    <br>> Arreglado problema de Fabric al cambiar entre versiones
    <br>> Arreglado problema que no permitía abrir las carpetas del juego mientras se lanzaba
    <br>> Arreglado problema de fugas en cmd al abrir el juego (Abría el juego y al no mostrar el CMD, quedaban corriendo de fondo)
    <br>> Terminada compatibilidad completa con Forge y Forge Legacy
    <br>> Incluidos todos los cmd del launcher en opción de mostrar los CMD
    <br>> Autoselección de cuenta disponible implementado
    <br>> Corregidos bugs relativos a inicios de sesión con cuentas premium
    <br>> Corregido bug al arrastrar la ventana donde sucedía un gran "snap" si era en los botones de ventana 
    <br>> Corregido problema de cálculos de escala de la ventana en resoluciones con escala mas del 100%
    <br>> Corregido bug al intentar iniciar sesión una segunda vez con cuenta premium
    <br>> Corregido bug al cambiar a otra instancia estando fuera del primer tab que rompía la interfaz
    <br>> Agregado OptiFine como opción de modloader adicional (BETA)
    <br>> Agregada NeoForge como opción de modloader adicional (BETA)
    <br>> Agregado botón de maximizar ventana
    <br>> Agregados chequeos para versiones disponibles de cada modloader según versión
    <br>> Sincronizados textos dentro de la interfaz al cambiar versiones/loaders
    <br>> Sincronizados los badges de loaders en perfiles
    <br>> Rehechos los listados de versiones y loaders
    <br>> Rehechas las funciones del listado de loaders
    <br>> Rehecho el aspecto de los botones de ventana
    <br>> Agregado botón para borrar instancias
    <br>> Cambiada localización del launcher ../ShiraData -> /AppData/Local/ShiraData

`

function writeShiraDesc() {

    // Shira github page (Dev Version Description)
    try {
        let devVar = document.querySelector(".dev");
        devVar.innerHTML = devDesc;

    } catch (e) {}

    // Shira github page (Latest Release Description)
    try {

        let relVar = document.querySelector(".release");
        relVar.innerHTML = releaseDesc;
        
    } catch (e) {}

    // Shira Juansekill page (Description)
    try {

        let juanseReleaseDesc = document.querySelector(".s-main-description");

        let html = `<h3>Últimos registros de la versión mas reciente:</h3>`
        html += releaseDesc;

    } catch (e) {}

}

function writeShiraTitles() {

    // Shira Juansekill Title
    try {
        let versionText = document.querySelector(".version-text"); 
        let versionNumber = "v0.1.72";
        
        versionText.innerHTML = versionNumber;
        
        let titleJuansekill = document.querySelector(".s-main-title");
        titleJuansekill.innerHTML = versionNumber;
        titleJuansekill.innerHTML += " - NeoForge + OptiFine";

    } catch (e) {}

}

function openLink(linkType) {

    if (linkType == "Github") window.open('https://github.com/Shiwaru/Shira-Highlight/releases/download/v0.1.72/Shira.Highlight.0.1.72.zip');
    if (linkType == "Store") window.open('ms-windows-store://pdp/?ProductId=9NQDQX221GN6', '_self');
    if (linkType == "Repo") window.open('https://github.com/Shiwaru/Shira-Highlight/releases');

    if (linkType == "VirusTotal") window.open('https://www.virustotal.com/gui/file/092f665fb5f5b24b0e9dcd28ebf5e2851fc916b5fcafc0e80c2b4ce6b7086da0?nocache=1');
    if (linkType == "Triage") window.open('https://tria.ge/260817-pbtsmsar2z/static1');
    if (linkType == "VirScan") window.open('https://www.virscan.org/report/092f665fb5f5b24b0e9dcd28ebf5e2851fc916b5fcafc0e80c2b4ce6b7086da0');

}