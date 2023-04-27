# Workspace Configuration Instructions
## Challenge 1: Atomic Accessibility Design

| Topic | Description |
| --- | --- | 
| Overview | Given the challenges associated with risk compliance for people with disabilities (Visual, Motion, Motor, Auditory, Cognitive/Learning), Atomic Accessibility Design enables designers and developers to establish a round-trip workflow process that traverses from abstract concepts to concrete details. The application of Atomic Accessibility Design concepts towards the development of accessibly-compliant solutions yields consistency and scalability while mitigating regulatory risk. |
| Challenge | Organize a well-rounded team that can leverage new accessibility tools to develop an end-to-end solution that explores novel applications of accessibility technologies for financial services.|
|Supporting Technology | [Atomic Accessibility Design Theme Builder][5] |

## Pick an Event Track
Challenge 1 offers two (2) event tracks. Each participating team must select the track they will compete within.

| Track | Description | Key Submission Artifacts | Required Skills |
| --- | --- | --- | --- | 
| **Design Thinking** | Utilize Design Thinking to define and develop a working end-to-end use cases for applying the Atomic Accessibility Design Theme Builder. | Link to a Visual Collaboration Software Board (Mural), Use Case Playback Brief (SCIPAB and/or What/Why/Wow,Persona, Empathy and Journey Maps, Business Lean Canvas), Use Case Story,Sequence Diagrams, 2-min Concept Playback Pitch Video, 2-min Quick Prototype Video | Design Thinking, Business Acumen, UML |
| **Hack the Code** | Develop a working end-to-end use case solution applying the Atomic Accessibility Design Theme Builder. | Link to a Visual Collaboration Software Board (Mural), Use Case Playback Brief (SCIPAB and/or What/Why/Wow,Persona, Empathy and Journey Maps, Business Lean Canvas), Use Case Story, Sequence Diagrams, Demo Code, 2-min Concept Playback Pitch Video, 2-min Demo Video | Design Thinking, Business and Technical Acumen, UML, Javascript |

## Update Readme
1. Open the locally cloned repository on your **Development Workstation** using your favorite IDE (i.e. [Visual Studio Code][1], [Atom][2]).
2. Based on track selected, copy the appropriate `sample code` to prime your project workspace within the `hackproject` folder.

    ```
    $ cd <REPO_FOLDER>
    $ cp -Rv ./challenges/common/* ./hackproject/
    $ cp -Rv ./challenges/challenge1/* ./hackproject/
    $ rm -f ./hackproject/setup.md
    $ rm -f ./hackproject/.gitkeep
    ```

    where:
    
    * REPO_FOLDER: Name of the local project folder on your **Development Workstation** after cloning the ``` Team Workspace``` repository.

3. Move `README.md` to the `archive` folder. Rename it to `ORIGINAL_INSTRUCTIONS.md`.

    ```
    $ mv -fv ./README.md ./archive/ORIGINAL_INSTRUCTIONS.md
    ```

4. Rename `SUBMISSION_README.md` to `README.md`

    ```
    $ mv -fv ./SUBMISSION_README.md ./README.md
    ```

5. Update new `README.md` according to the Template Instructions therein.

## Develop Solution
During the event publish all work to the Team Workspace. Follow these [submission instructions](../../submission-guides/submission-instructions.md) prior to finalizing the team's project submission.  

[1]: https://code.visualstudio.com/
[2]: https://atom.io
[3]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[4]: https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository
[5]: https://github.com/discoverfinancial/a11y-theme-builder
