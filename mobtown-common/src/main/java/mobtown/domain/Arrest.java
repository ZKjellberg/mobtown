package mobtown.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * A Baltimore Police Department arrest event
 */
@Embeddable
public class Arrest {

    @Column(name = "INTERSECTION")
    private String intersection;

    @Column(name = "NEIGHBORHOOD")
    private String neighborhood;

    @Column(name = "TIMESTAMP")
    private LocalDateTime timestamp;

    @Column(name = "LOCATION")
    private String location;

    /**
     * no-args ctor for JPA
     */
    protected Arrest() { }

    Arrest(
            final String intersection,
            final String neighborhood,
            final LocalDateTime timestamp,
            final String location) {
        this.intersection = intersection;
        this.neighborhood = neighborhood;
        this.timestamp = timestamp;
        this.location = location;
    }

    public String getIntersection() {
        return intersection;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public String getLocation() {
        return location;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (!(o instanceof Arrest)) return false;
        final Arrest arrest = (Arrest) o;
        return Objects.equals(intersection, arrest.intersection) &&
                Objects.equals(neighborhood, arrest.neighborhood) &&
                Objects.equals(timestamp, arrest.timestamp) &&
                Objects.equals(location, arrest.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(intersection, neighborhood, timestamp, location);
    }

    @Override
    public String toString() {
        return "Arrest{" +
                "intersection='" + intersection + '\'' +
                ", neighborhood='" + neighborhood + '\'' +
                ", timestamp=" + timestamp +
                ", location='" + location + '\'' +
                '}';
    }
}
