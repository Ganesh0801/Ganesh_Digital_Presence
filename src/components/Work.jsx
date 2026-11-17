import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepos } from '../store/githubSlice'
import { projects, profile } from '../data/profile'

const Work = () => {
  const dispatch = useDispatch()
  const { repos, status } = useSelector(s => s.github)
  useEffect(() => { dispatch(fetchRepos()) }, [dispatch])

  return (
    <section id="work" className="sec">
      <h2>Work I would put my name on</h2>
      <div className="projects">
        {projects.map(p => (
          <article key={p.name} className="project">
            <h3>{p.name}</h3>
            <p className="kind">{p.kind}</p>
            <p>{p.text}</p>
            <ul className="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
      </div>

      <h3 className="sub">Fresh from GitHub</h3>
      {status === 'loading' && <p className="muted">Loading repositories…</p>}
      {status === 'error' && <p className="muted">GitHub did not respond. See everything at <a href={`https://github.com/${profile.github}`}>github.com/{profile.github}</a>.</p>}
      <div className="repos">
        {repos.map(r => (
          <a key={r.id} className="repo" href={r.html_url} target="_blank" rel="noreferrer">
            <strong>{r.name}</strong>
            <span>{r.description || 'No description yet'}</span>
            <small>{r.language || 'Mixed'} · updated {new Date(r.pushed_at).toLocaleDateString()}</small>
          </a>
        ))}
      </div>
    </section>
  )
}
export default Work