import { createContext } from "react";

const user = {
  name: "Hannes Stein",
  bio: `In der schönen Hafenstadt Hamburg erblickte ich zum ersten mal die Welt. Seit dem ist viel Zeit 
  		vergangen und ich konnte einige Erfahrung machen. Nach meiner Ausbildung und anschließenden Arbeit als Koch habe ich mich dazu entschlossen mein Abitur nachzuholen und Mechatronik zu studieren. Von dort aus begann meine Reise in die technische Welt der Maschinen.`,
  email: "",
  gitHub: "https://github.com/ek9n",
  linkedIn: "https://www.linkedin.com/in/hannes-stein-567016244/",
  projects: [
    {
      title: "Kabellose-Programmierbare Motoreinheit",
      description: `Diese innerhalb eines Künstlerprojekts entwickelte programmierbare Motoreinheit ist über
	        eine Fernsteuerung aktivierbar und besitzt eine eigene Stromversorgung über einen Akku.
	        Die Motoreinheit kann aufgehangen werden und versetzt bei Aktivierung die gehaltenen Skulpturen in Bewegung.
	        Der Entwicklungsprozess ging über die Ideenfindung, das technische Design der hard- und software bis
	        zur Realisierung des fertigen, einsatzfähigen Produkts.`,
      skillsUsed: [
        "3D-CAD",
        "3D-Druck",
        "Elektronik",
        "PCB-Design",
        "Microcontroller Programmierung in C",
        "Handwerklich-technische Fähigkeiten",
      ],
      thumbnail: "pcbs.jpg",
      images: ["server00.png", "test2.JPG"],
      github: "blabla@github.com",
    },
    {
      title: "Galvanisierungsautomat",
      description: `Das Projekt wurde für die Berliner Hochschule für Technik entwickelt und automatisiert den manuellen
	        Prozess der Galvanisierung. Der Galavanisierungsautomat besteht aus einem Linearroboter mit integrierter Seilwinde
	        und einem Bedienungs- und Steuerungssystem. Innerhalb des Projekts wurde ein STM32 Evaluationsboard verwendet.
	        Ich erwarb hier tiefere Kenntnisse in die Funktionsweise des STM32-Microcontrollers:
	        STM32 Architektur, Timer, Interrupts, Debugging, Register Ebene, STM32CubeIDE und Hall-Bibliothek.`,
      skillsUsed: [
        "MS Project",
        "3D-CAD",
        "3D-Druck",
        "Elektronik",
        "Mikrocontroller Programmierung in C",
        "Handwerklich-technische Fähigkeiten",
      ],
      thumbnail: "test1.JPG",
      images: ["test0.JPG", "test1.JPG", "test2.JPG"],
      github: "blabla@github.com",
    },
    {
      title: "Magnetisch wirkender Endeffektor mit integrierter Steuerung",
      description: `Der Endeffektor kann von einem UR-Roboter eigenständig aufgenommen und betätigt werden.
	        Dies ermöglichte ein sicheres Handling verschiedener Bauteile für eine PnP-Anwendung innerhalb eines Automatisierungsprojekts der Siemens AG`,
      skillsUsed: ["Design", "3D-Druck", "PCB-Desing", "C"],
      thumbnail: "test2.JPG",
      images: ["test0.JPG", "test1.JPG", "test2.JPG"],
      github: "blabla@github.com",
    },
  ],
};

export const UserContext = createContext(user);
