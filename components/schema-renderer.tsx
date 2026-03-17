import { type SchemaOrg } from 'schema-org';

interface SchemaRendererProps {
  schema: SchemaOrg.Thing | SchemaOrg.Thing[];
}

export function SchemaRenderer({ schema }: SchemaRendererProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
