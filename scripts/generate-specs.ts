import PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";
import { projects } from "../lib/projects";

const OUTPUT_DIR = path.join(process.cwd(), "public", "specs");

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateApiSpec(
  title: string,
  endpoints: { method: string; path: string; summary: string }[],
  filename: string
) {
  return new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const filePath = path.join(OUTPUT_DIR, filename);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc.fontSize(24).text(title, { align: "center" });
    doc.moveDown();
    doc.fontSize(10).fillColor("#666").text("API Contract Specification v1.0", { align: "center" });
    doc.moveDown(2);

    doc.fillColor("#000").fontSize(12).text("Endpoints", { underline: true });
    doc.moveDown();

    endpoints.forEach((ep, i) => {
      doc.fontSize(11).fillColor("#0078D4").text(`${ep.method} ${ep.path}`);
      doc.fontSize(9).fillColor("#333").text(ep.summary);
      if (i < endpoints.length - 1) doc.moveDown(0.8);
    });

    doc.moveDown(2);
    doc.fontSize(8).fillColor("#999").text(
      "Wajahat Ali Khan — Solutions Architecture & Engineering Specification",
      { align: "center" }
    );

    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

function generateDeploymentSpec(
  title: string,
  provider: string,
  services: string[],
  filename: string
) {
  return new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const filePath = path.join(OUTPUT_DIR, filename);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc.fontSize(24).text(title, { align: "center" });
    doc.moveDown();
    doc.fontSize(10).fillColor("#666").text(`Deployment Architecture — ${provider.toUpperCase()}`, { align: "center" });
    doc.moveDown(2);

    doc.fillColor("#000").fontSize(12).text("Service Topology", { underline: true });
    doc.moveDown();

    services.forEach((svc) => {
      doc.fontSize(10).fillColor("#333").text(`• ${svc}`);
    });

    doc.moveDown(2);
    doc.fontSize(12).text("Infrastructure Notes", { underline: true });
    doc.moveDown();
    doc.fontSize(9).fillColor("#333").text(
      "Multi-AZ deployment with autoscaling policies. Health checks every 10s. " +
        "Circuit breakers configured for downstream dependencies. " +
        "Observability via distributed tracing and structured logging."
    );

    doc.moveDown(2);
    doc.fontSize(8).fillColor("#999").text(
      "Wajahat Ali Khan — Solutions Architecture & Engineering Specification",
      { align: "center" }
    );

    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

async function main() {
  ensureDir(OUTPUT_DIR);
  console.log("Generating specification PDFs...");

  for (const project of projects) {
    for (const spec of project.specs) {
      if (spec.type === "api") {
        await generateApiSpec(
          spec.title,
          project.endpoints.map((e) => ({
            method: e.method,
            path: e.path,
            summary: e.summary,
          })),
          spec.filename
        );
      } else {
        await generateDeploymentSpec(
          spec.title,
          project.provider,
          project.nodes.map((n) => n.label),
          spec.filename
        );
      }
      console.log(`  ✓ ${spec.filename}`);
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
