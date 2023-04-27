# Helpful Participation Tools

## Hacker's Toolbelt
The following tools and education resources are helpful aids to bootstrap all team members relative to the deliverables required for the hackathon. 

### Markdown

* [Markdown Tutorial](https://www.markdowntutorial.com/)
* Markdown Documentation
    * [Getting Started with Markdown](https://www.markdownguide.org/getting-started/)
    * [Markdwon Basics](https://www.markdownguide.org/basic-syntax/)
    * [Mastering the Markdown Language](https://guides.github.com/features/mastering-markdown/)
* Authoring Tools
    * Integrated development environment (IDE)
        * [Visual Studio Code](https://code.visualstudio.com/)
        * [Atom](https://atom.io)
    * Markdown Converters for Word Processors
        * MS-Word to Markdown
            * [Word-to-Markdown](https://word2md.com/)
            * [Writage](https://www.writage.com/)
            * [How to convert Word Docs to Markdown](https://medium.com/@ravinduk369/convert-a-ms-word-document-to-markdown-e0e99c41cfab)
        * Google Docs to Markdown
            * [G-Suite Plugins](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607)
            * [How to convert Google Docs to Markdown](https://unslush.substack.com/p/how-to-convert-a-google-doc-to-markdown)

### UML Design Tools
Here are some recommendations for the creation of UML diagrams. These diagrams should be stored in the `usecase/images/src/puml` folder.

* PlantUML
    * Documentation
        * [PlantUML Sequence Diagram Language](https://plantuml.com/sequence-diagram)
        * [PlantUML Colors](https://plantuml.com/color)
    * Select your preferred UML Diagram Development tooling for the creation of ```.puml``` files and the associated generation of ```.png``` images.

      * [PUML Editor](https://www.planttext.com/)
      * [Local Docker based PUML Server](https://hub.docker.com/r/plantuml/plantuml-server) using a single command:

          ```
          $ docker run -d -p 8080:8080 plantuml/plantuml-server:tomcat
          ```
    
### Flowchart Diagrams
Here are some recommendations for the creation of flowcharts. These diagrams should be stored in the `usecase/images/src/charts` folder.

* [Lucid Charts](https://lucid.app/documents#/dashboard)
* Online development using [diagrams.net](https://www.diagrams.net)
* FREE Desktop Version [draw.io](https://github.com/jgraph/drawio-desktop/releases/tag/v14.4.3)

### Slideware
Here are some recommendations for the creation of flowcharts. These diagrams should be stored in the `usecase/images/src/slideware` folder.

* PowerPoint
* Keynote

### Visual Collaboration Boards
[Design Thinking activities](./design-thinking-artifacts.md) make use of visual collaboration tools that allow teams to work together on virtual whiteboards with a variety of features for real-time interactions. 

Participants may use any tools of their choice as long as their resulting board is easily accessible by the judges. It is recommended that participants use the visual collaboration board tool offered by [Mural](./mural/mural-instructions.md) and refer to the [Mural FAQ](./mural/mural-faq.md).

### Use Case Story
Successful hackathon participants will demonstrate their story-telling ability. This repository contains a structured document outline (using Markdown) to describe a solution to a problem or idea. It is recommended that participants familiarize themselves with the [sample use-case story template](../challenges/challenge1/usecase/story-template.md). After completing their [Design Thinking activities](./design-thinking-artifacts.md), participants can use their results to clearly articulate story-telling topics such as:

* Business Challenge
* Problem Domain Vernacular
* Solution Assumptions
* Problem Domain Persona

Participants **should** consider extending their user story with a use case using UML sequence diagrams. Please refer to [UML Design Tools](#uml-design-tools) for assistance. 
