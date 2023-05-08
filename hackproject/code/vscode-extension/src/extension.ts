import * as vscode from "vscode";
import * as sdk from "../../sdk";
import { Diagnostic, Range, DiagnosticSeverity, TextDocument } from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "accessify" is now active!');

  let disposable = vscode.commands.registerCommand("accessify.validate", () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
      return;
    }
    5;
    const activeDocument = activeEditor.document;
    if (activeDocument.languageId !== "html") {
      vscode.window.showErrorMessage(
        "accessify extension only works with HTML files"
      );
      return;
    }

    const decorationType = vscode.window.createTextEditorDecorationType({
      backgroundColor: "red",
    });

    const updateDiagnostics = async (document: TextDocument): Promise<void> => {
      const diagnostics: Diagnostic[] = [];

      const responses = await sdk.validate({
        html: document.getText(),
        validator: new sdk.ComboValidator(),
        requirement: sdk.Requirement.AA,
        htmlPath: document.uri.path,
      });

      responses.forEach((response) => {
        if (!response.isValid) {
          response.errors.forEach((e) => {
            const { start, end, error } = e;

            diagnostics.push(
              new Diagnostic(
                new Range(document.positionAt(start), document.positionAt(end)),
                error.message,
                DiagnosticSeverity.Error
              )
            );
          });
        }
      });

      console.log(responses);

      activeEditor.setDecorations(decorationType, diagnostics);
    };

    updateDiagnostics(activeDocument);

    vscode.workspace.onDidChangeTextDocument((e) => {
      if (e.document === activeDocument) {
        updateDiagnostics(activeDocument);
      }
    });
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
