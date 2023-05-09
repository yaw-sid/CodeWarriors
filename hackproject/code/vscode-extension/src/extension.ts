import * as vscode from "vscode";
import * as sdk from "../../sdk";
import { Diagnostic, Range, DiagnosticSeverity, TextDocument } from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("Accessify is now active!");

  let disposable = vscode.commands.registerCommand("accessify.validate", () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
      return;
    }

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

    const validator = new sdk.ComboValidator();

    const updateDiagnostics = async (document: TextDocument): Promise<void> => {
      const diagnostics: Diagnostic[] = [];

      const responses = await sdk.validate({
        html: document.getText(),
        validator: validator,
        requirement: sdk.Requirement.AA,
        htmlPath: document.fileName,
      });

      responses.forEach((response) => {
        if (!response.isValid) {
          response.errors.forEach((e) => {
            const { start, end, error } = e;
            const range = new Range(
              document.positionAt(start),
              document.positionAt(end)
            );

            diagnostics.push(
              new Diagnostic(range, error.message, DiagnosticSeverity.Error)
            );
          });
        }
      });

      activeEditor.setDecorations(decorationType, diagnostics);

      vscode.languages.registerHoverProvider("html", {
        provideHover(_, position) {
          const relevantDiagnostics = diagnostics.filter(
            (d) =>
              d.range.contains(position) &&
              d.severity === vscode.DiagnosticSeverity.Error
          );
          const message = relevantDiagnostics.map((d) => d.message).join("\n");
          const hover = new vscode.Hover(message);

          return hover;
        },
      });
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
