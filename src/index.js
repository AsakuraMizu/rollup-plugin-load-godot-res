export default function loadGodotRes() {
  return {
    name: 'load-godot-res',
    resolveId(source, importer) {
      if (importer && source.startsWith('res://')) {
        return {
          id: source,
          external: true,
          moduleSideEffects: true
        }
      }
      return null;
    }
  }
}
