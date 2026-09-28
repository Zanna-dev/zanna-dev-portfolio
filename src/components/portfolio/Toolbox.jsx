import { toolboxGroups } from '../../data/toolbox';

export function Toolbox() {
  return <div className="toolbox-grid">{toolboxGroups.map((group, groupIndex) => <section className="toolbox-group" key={group.label}><div className="toolbox-label"><span>0{groupIndex + 1}</span><h3>{group.label}</h3></div><div className="tool-list">{group.tools.map((tool, toolIndex) => <span className="tool-card" key={tool} style={{ '--tool-index': toolIndex }}>{tool}</span>)}</div></section>)}</div>;
}
