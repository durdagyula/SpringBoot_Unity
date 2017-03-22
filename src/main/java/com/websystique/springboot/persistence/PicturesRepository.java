package com.websystique.springboot.persistence;

import com.websystique.springboot.model.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PicturesRepository extends JpaRepository<Picture, Long> {
}
