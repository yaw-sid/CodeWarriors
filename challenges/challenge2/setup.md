# Workspace Configuration Instructions
## Challenge 2: Accessible Contracts

| Topic | Description |
| --- | --- | 
| Overview | The use of complex language in contracts and legal text makes them difficult to understand, particularly for individuals with cognitive disabilities. |
| Challenge | Organize a well-rounded team that will develop a generic solution to simplify the language used in contracts, improve their overall clarity and accessibility, and make them easier to find and understand. This solution should be flexible enough to be deployed in any infrastructure.|
## Event Track
Challenge 2 offers one event track.

| Track | Description | Key Submission Artifacts | Required Skills |
| --- | --- | --- | --- | 
| **Hack the Code** | Develop a generic solution that can be deployed in any kind of infrastructure to make contracts easier to understand by simplifying the language used and making the constraints within the contract more easily discoverable. You can optionally use the Design Thinking methodology and the AXA Computable Contracts API to accomplish this. | Link to a Visual Collaboration Software Board (Mural), Use case story, Journey map, basic research and user testing results, 2-min Concept Playback Pitch Video, 2-min Demo code Video | Teams shoud ideally include mixed profiles. Usefull skills unclude: Creativity, Design Thinking, UX Research & Design, Accessibility, Coding, UML |

## Update Readme
1. Open the locally cloned repository on your **Development Workstation** using your favorite IDE (i.e. [Visual Studio Code][1], [Atom][2]).
2. Copy the appropriate `sample code` to prime your project workspace within the `hackproject` folder.

    ```
    $ cd <REPO_FOLDER>
    $ cp -Rv ./challenges/common/* ./hackproject/
    $ cp -Rv ./challenges/challenge2/* ./hackproject/
    $ rm -f ./hackproject/setup.md
    $ rm -f ./hackproject/.gitkeep
    ```

    *where*:
    
    * REPO_FOLDER: Name of the local project folder on your **Development Workstation** after cloning the ``` Team Workspace``` repository.
 
&nbsp;

3. Move `README.md` to the `archive` folder. Rename it to `ORIGINAL_INSTRUCTIONS.md`.

    ```
    $ mv -fv ./README.md ./archive/ORIGINAL_INSTRUCTIONS.md
    ```

4. ✏️ Rename `SUBMISSION_README.md` to `README.md`

    ```
    $ mv -fv ./SUBMISSION_README.md ./README.md
    ```

5. 📝 Update the new `README.md` according to the Template Instructions there in.
   
6. 👀 Read the [use cases overview](./usecases/use-cases.md) to inspire you.
   
7. 👀 Read the [AXA Computable Contracts API documentation](./api/API.md) and check the [example policies](./api/policies/) 🔖

8. ✨ Have fun coding your solution with your Team ✨

## Develop Solution
During the event publish all work to the Team Workspace. Follow these [submission instructions](../../submission-guides/submission-instructions.md) prior to finalizing the team's project submission.  


[1]: https://code.visualstudio.com/
[2]: https://atom.io

